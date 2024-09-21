import { useState } from "react";
import styles from "./currency.module.css";
import PropTypes from "prop-types";

export default function Currency({ currency }) {
  const [imageError, setImageError] = useState(false);
  const { short_code, name } = currency;
  const code = short_code.slice(0, 2).toLowerCase();

  return (
    <div className={styles.currency}>
      {!imageError && (
        <img
          className={styles.flag}
          src={`https://flagcdn.com/h60/${code}.png`}
          width={18}
          height={18}
          alt={name + "flag"}
          loading="lazy"
          decoding="async"
          onError={() => setImageError(true)}
        />
      )}
      {imageError && <div className={styles.error}>!</div>}
      <p className={styles.code}>{short_code}</p>
      <div>-</div>
      <p className={styles.text}>
        {name.length > 20 ? name.slice(0, 20) : name}
      </p>
    </div>
  );
}

Currency.propTypes = {
  currency: PropTypes.object,
};
