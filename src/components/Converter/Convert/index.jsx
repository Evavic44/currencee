import styles from "./convert.module.css";

export default function Convert() {
  return (
    <form className={styles.convert}>
      {/* Amount */}
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="amount">
          Amount
        </label>
        <div>
          <span className={styles.symbol}>$</span>
          <input type="text" placeholder="0" id="amount" />
        </div>
      </div>

      {/*  */}
    </form>
  );
}
