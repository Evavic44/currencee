import Link from "../../Link/Link";
import styles from "./result.module.css";
import PropTypes from "prop-types";

export default function Result({
  amount,
  baseCurrency,
  foreignCurrency,
  result,
  loading,
}) {
  const tooHigh = amount.length >= 20;

  function getResult(value) {
    if (isNaN(value)) return 0;
    return Number(value).toLocaleString();
  }

  return (
    <div className={styles.container}>
      <div className={styles.resultcontainer}>
        <div className={styles.result}>
          <p>
            {Number(amount).toLocaleString() || 0} {baseCurrency.name} =
          </p>
          {loading && (
            <div className={styles.loader}>
              <svg
                className={styles.spinner}
                width="35px"
                height="35px"
                fill="none"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            </div>
          )}
          {!loading && (
            <h2>
              {!tooHigh && (
                <>
                  <div className={styles.symbol}>{foreignCurrency.symbol}</div>
                  <div className={styles.text}>
                    {result ? getResult(result.value) : 0}
                  </div>
                </>
              )}
              {tooHigh && "Too high ⛔"}
            </h2>
          )}
        </div>
      </div>
      <div className={styles.attribution}>
        <p>
          Powered by{" "}
          <Link href="https://currencybeacon.com">Currencybeacon</Link>
        </p>
      </div>
    </div>
  );
}

Result.propTypes = {
  amount: PropTypes.string,
  baseCurrency: PropTypes.object,
  foreignCurrency: PropTypes.object,
  result: PropTypes.object,
  loading: PropTypes.bool,
};
