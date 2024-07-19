import styles from "./status.module.css";

const code = {
  good: "#47c652",
  fair: "#fff000",
  low: "#ff0000",
};

export default function ApiStatus() {
  return (
    <div className={styles.status}>
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: code.good,
        }}
      ></div>
      Status
    </div>
  );
}
