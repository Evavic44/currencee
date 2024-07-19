import PropTypes from "prop-types";
import styles from "./link.module.css";
import ExternalIcon from "../../assets/icons/external.svg?react";

export default function Link({ url, target, children }) {
  return (
    <a
      className={styles.link}
      href={url + "?ref=currencee.com"}
      target={target}
    >
      {children}
      <ExternalIcon />
    </a>
  );
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired || PropTypes.string.isRequired,
};
