import PropTypes from "prop-types";
import styles from "./header.module.css";

export default function Header({ children }) {
  return <header className={styles.header}>{children}</header>;
}

Header.propTypes = {
  children: PropTypes.node || PropTypes.string,
};
