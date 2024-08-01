import PropTypes from "prop-types";
import styles from "./emptystate.module.css";
import ErrorIllustration from "../../assets/icons/error.svg?react";

export default function Emptystate({ title }) {
  return (
    <div className={styles.emptystate}>
      <ErrorIllustration />
      <h3>{title}</h3>
    </div>
  );
}

Emptystate.propTypes = {
  title: PropTypes.string,
};
