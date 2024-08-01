import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./search-input.module.css";
import SwitchIcon from "../../assets/icons/switch.svg?react";
import XIcon from "../../assets/icons/xmark.svg?react";
import Currency from "../Currency/Currency";
import SearchIcon from "../../assets/icons/search.svg?react";
import Emptystate from "../Emptystate/Emptystate";

export default function SearchInput({ data, error, currency, onSelectItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const menuRef = useRef(null);

  function handleToggleInput() {
    setIsOpen((prev) => !prev);
  }

  function handleCloseMenu() {
    setIsOpen(false);
    setQuery("");
  }

  function handleSelection(selectedCurrency) {
    onSelectItem(selectedCurrency);
    handleCloseMenu();
  }

  // Filter search data
  useEffect(() => {
    const searchResult = data?.filter(
      (currency) =>
        currency.short_code.toLowerCase().includes(query.toLowerCase()) ||
        currency.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(query && searchResult.length === 0 ? [] : searchResult);
  }, [data, query]);

  // Close search menu when clicking outside of it while the menu is active
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && isOpen) {
        handleCloseMenu();
      }
    };
    document.documentElement.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.documentElement.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [isOpen]);

  // Close search menu when escape key is pressed
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") handleCloseMenu();
    });
    return () => {
      document.removeEventListener("keydown", handleCloseMenu());
    };
  }, []);

  return (
    <div className={styles.searchinput} ref={menuRef}>
      <button
        type="button"
        role="combobox"
        aria-haspopup={true}
        aria-expanded={isOpen}
        onClick={handleToggleInput}
        className={styles.inputbutton}
      >
        <Currency key={currency.id} currency={currency} />
        <div className={styles.selecticon}>
          {isOpen ? <XIcon /> : <SwitchIcon />}
        </div>
      </button>
      {isOpen && (
        <div className={styles.searchinputlist}>
          <label className={styles.search}>
            <input
              type="search"
              name="currency-search"
              id="search"
              placeholder="Search. E.g USD or Dollar"
              autoComplete="off"
              spellCheck={false}
              aria-label="Currency Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className={styles.searchicon}>
              <SearchIcon />
            </span>
          </label>
          {error && <Emptystate title={error} />}
          {!error && (
            <ul className={styles.searchinputlistitem} role="listbox">
              {filteredData.length > 0 ? (
                filteredData.map((currencyitem) => (
                  <li
                    role="option"
                    key={currencyitem.id}
                    aria-selected={currencyitem.id === currency.id}
                    onClick={() => handleSelection(currencyitem)}
                  >
                    <button type="button" className={styles.inputitem}>
                      <Currency currency={currencyitem} />
                    </button>
                  </li>
                ))
              ) : (
                <div className={styles.empty}>No results found.</div>
              )}
            </ul>
          )}
        </div>
      )}
      {isOpen && (
        <button
          type="button"
          className={`${styles.closebutton} btn`}
          onClick={handleCloseMenu}
        >
          Close
        </button>
      )}
    </div>
  );
}

SearchInput.propTypes = {
  data: PropTypes.array,
  error: PropTypes.string,
  currency: PropTypes.object,
  className: PropTypes.string,
  onSelectItem: PropTypes.func,
};
