import styles from "./converter.module.css";
import PropTypes from "prop-types";

export default function Converter({ children }) {
  return <section className={styles.converter}>{children}</section>;
}

Converter.propTypes = {
  children: PropTypes.node || PropTypes.string,
};
