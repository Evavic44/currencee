import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Logo from "./components/Logo";
import Status from "./components/Status/Status";
import Converter from "./components/Converter/Converter";
import Result from "./components/Converter/Result/Result";
import Convert from "./components/Converter/Convert/Convert";
import Footer from "./components/Footer/Footer";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import { isInputNum } from "./utils/validate-input";

const initialcurrency = [
  {
    id: 147,
    name: "US Dollar",
    short_code: "USD",
    symbol: "$",
  },
  {
    id: 64,
    name: "Indian Rupee",
    short_code: "INR",
    symbol: "₹",
  },
];

export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  // select currency and conversion amount
  const [amount, setAmount] = useState("100");
  const [baseCurrency, setBaseCurrency] = useState(initialcurrency.at(0));
  const [foreignCurrency, setForeignCurrency] = useState(initialcurrency.at(1));

  // fetch currencies
  useEffect(() => {
    async function getCurrencies() {
      try {
        const res = await fetch(
          `https://api.currencybeacon.com/v1/currencies?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );

        if (!res.ok) {
          throw new Error("Error Fetching Data ⛔");
        }
        const currencies = await res.json();
        if (currencies.meta.code === 503) {
          throw new Error("Service Unavailable");
        }
        setData(currencies.response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    setError("");
    getCurrencies();
  }, []);

  // validate amount input
  function handleAmount(e) {
    if (isInputNum(e.target.value)) {
      setAmount(e.target.value);
    }
    return;
  }

  function swapCurrency() {
    setBaseCurrency(foreignCurrency);
    setForeignCurrency(baseCurrency);
    if (!amount) {
      setResult({});
    }
  }

  const handleConversion = async () => {
    try {
      setLoading(true);
      const base = baseCurrency.short_code.toUpperCase();
      const foreign = foreignCurrency.short_code.toUpperCase();
      const res = await fetch(
        `https://api.currencybeacon.com/v1/convert?api_key=${
          import.meta.env.VITE_API_KEY
        }&from=${base}&to=${foreign}&amount=${amount}`
      );
      if (!res.ok) {
        throw new Error("Conversion Failed ⛔");
      }
      const conversion = await res.json();
      setResult(conversion.response);
      setLoading(false);
    } catch (error) {
      console.log("Conversion Failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // perform conversion when base or foreign currency changes
  useEffect(() => {
    if (amount > 0 && result) {
      handleConversion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseCurrency, foreignCurrency]);

  // update title when conversion is performed
  useEffect(() => {
    if (!result.from || !result.to) return;

    document.title = `${Number(
      amount
    ).toLocaleString()} ${result?.from.toUpperCase()} to ${result?.to.toUpperCase()} Conversion - Currencee`;
    return () => {
      document.title =
        "Currencee | The World's Most Trusted and Secure Currency Conveter";
    };
  }, [amount, result]);

  return (
    <div className="app">
      <Header>
        <Logo />
        <Status />
      </Header>
      <Converter>
        <Convert
          data={data}
          error={error}
          amount={amount}
          handleAmount={handleAmount}
          setAmount={setAmount}
          baseCurrency={baseCurrency}
          foreignCurrency={foreignCurrency}
          setBaseCurrency={setBaseCurrency}
          setForeignCurrency={setForeignCurrency}
          swapCurrency={swapCurrency}
          handleConversion={handleConversion}
        />
        <Result
          result={result}
          loading={loading}
          amount={amount}
          baseCurrency={baseCurrency}
          foreignCurrency={foreignCurrency}
        />
      </Converter>
      <Footer>
        <ThemeSwitch />
      </Footer>
    </div>
  );
}
