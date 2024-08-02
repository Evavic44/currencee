/* eslint-disable no-undef */
const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("💲Currencee API Running...");
});

// API request to handle list of currencies
app.get("/currency", (req, res) => {
  (async function getCurrencies() {
    try {
      const response = await fetch(
        `https://api.currencybeacon.com/v1/currencies?api_key=${process.env.API_KEY}`
      );
      const currencies = await response.json();
      res.json(currencies);
    } catch (error) {
      res.json(error);
    }
  })();
});

// Server-side API request to handle currency conversion
app.get("/convert", (req, res) => {
  (async function handleConversion() {
    const { base, foreign, amount } = req.query;

    if (!base || !foreign || !amount) {
      return res
        .status(400)
        .json({ error: "Missing required query parameters" });
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
  })();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
