import styles from "./footer.module.css";
import Link from "../Link";
import PropTypes from "prop-types";

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.masthead}>
        Built by{" "}
        <Link url="https://victoreke.com" target="_blank">
          Victor Eke
        </Link>
      </div>
      <div>{children}</div>
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.node || PropTypes.string,
};
