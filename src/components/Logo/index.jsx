import styles from "./logo.module.css";
import LogoImage from "/logo.png";

export default function Logo() {
  return (
    <div>
      <h1 className={styles.logo}>
        <img src={LogoImage} alt="currencee logo" width={35} height={35} />
        <span className={styles.text}>Currencee</span>
      </h1>
      <p className={styles.description}>
        The world&apos;s most trusted, fast and secure currency converter
      </p>
    </div>
  );
}
