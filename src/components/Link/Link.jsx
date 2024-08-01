import PropTypes from "prop-types";
import styles from "./link.module.css";
import ExternalIcon from "../../assets/icons/external.svg?react";

export default function Link({ href, target = "_blank", children }) {
  return (
    <a
      className={styles.link}
      href={href + "?ref=currencee.com"}
      target={target}
    >
      {children}
      <ExternalIcon />
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired || PropTypes.string.isRequired,
};
