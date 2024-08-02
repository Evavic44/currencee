import styles from "./footer.module.css";
import Link from "../Link/Link";
import PropTypes from "prop-types";

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.masthead}>
        <p>
          Built by{" "}
          <Link href="https://victoreke.com" target="_blank">
            Victor Eke
          </Link>
        </p>
        <p>
          Support Me
          <Link href="https://buymeacoffee.com/victoreke" target="_blank">
            Buymeacoffee
          </Link>
        </p>
      </div>
      <div>{children}</div>
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.node || PropTypes.string,
};
