import PropTypes from "prop-types";
import SearchInput from "../../SearchInput/SearchInput";
import styles from "./convert.module.css";
import SwapIcon from "../../../assets/icons/swap.svg?react";

export default function Convert({
  data,
  error,
  baseCurrency,
  foreignCurrency,
  setBaseCurrency,
  setForeignCurrency,
  swapCurrency,
  amount,
  handleAmount,
  handleConversion,
}) {
  return (
    <form className={styles.convert} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="amount">
          Amount
        </label>
        <div className={styles.inputContainer}>
          <span className={styles.symbol}>{baseCurrency.symbol}</span>
          <input
            className={styles.input}
            type="number"
            placeholder="0.00"
            id="amount"
            value={amount}
            onChange={handleAmount}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <div className={styles.label}>Base Currency</div>
        <SearchInput
          currency={baseCurrency}
          data={data}
          error={error}
          onSelectItem={setBaseCurrency}
        />
      </div>

      <div className={styles.swapbtn}>
        <span className={styles.line}></span>
        <button
          type="button"
          className={`${styles.btn} btn`}
          onClick={swapCurrency}
        >
          <SwapIcon /> Swap
        </button>
        <span className={styles.line}></span>
      </div>

      <div className={styles.formGroup}>
        <div className={styles.label}>Foreign Currency</div>
        <SearchInput
          currency={foreignCurrency}
          data={data}
          error={error}
          onSelectItem={setForeignCurrency}
        />
      </div>

      <div className={styles.formGroup}>
        <button
          type="button"
          className={styles.convertbtn}
          disabled={amount ? false : true}
          onClick={handleConversion}
        >
          Convert <SwapIcon />
        </button>
      </div>
    </form>
  );
}

Convert.propTypes = {
  data: PropTypes.array,
  error: PropTypes.string,
  amount: PropTypes.string,
  handleAmount: PropTypes.func,
  baseCurrency: PropTypes.object,
  foreignCurrency: PropTypes.object,
  setBaseCurrency: PropTypes.func,
  setForeignCurrency: PropTypes.func,
  swapCurrency: PropTypes.func,
  handleConversion: PropTypes.func,
};
