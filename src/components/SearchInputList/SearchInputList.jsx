import PropTypes from "prop-types";
import styles from "./search-input-list.module.css";

export default function SearchInputList({ children, menuRef }) {
  return (
    <ul role="listbox" className={styles.searchinputlist} ref={menuRef}>
      <div className={styles.searchinputitem}>{children}</div>
    </ul>
  );
}

SearchInputList.propTypes = {
  children: PropTypes.node,
  menuRef: PropTypes.object,
};
