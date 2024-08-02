import { createRequire } from "module";
import express from "express";
import cors from "cors";
import path from "path";

const require = createRequire(import.meta.url);
require("dotenv").config();

const PORT = process.env.PORT || 5173;
const app = express();

app.use(cors());

// Serve static files from the Vite build directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "dist")));

// API request to handle list of currencies
app.get("/api/currency", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.currencybeacon.com/v1/currencies?api_key=${process.env.API_KEY}`
    );
    const currencies = await response.json();
    res.json(currencies);
  } catch (error) {
    console.log("Currency Fetch Failed:", error);
    res.status(500).json({ error: error.message });
  }
});

// Server-side API request to handle currency conversion
app.get("/api/convert", async (req, res) => {
  const { base, foreign, amount } = req.query;

  if (!base || !foreign || !amount) {
    return res.status(400).json({ error: "Missing required query parameters" });
  }

  try {
    const response = await fetch(
      `https://api.currencybeacon.com/v1/convert?api_key=${process.env.API_KEY}&from=${base}&to=${foreign}&amount=${amount}`
    );
    const conversion = await response.json();
    res.json(conversion.response);
  } catch (error) {
    console.log("Conversion Failed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// All other requests should return the index.html from the build
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
