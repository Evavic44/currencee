import { useEffect, useState } from "react";
import styles from "./themeswitch.module.css";
import SunIcon from "../../assets/icons/sun.svg?react";
import MoonIcon from "../../assets/icons/moon.svg?react";

export default function ThemeSwitch() {
  function getInitialTheme() {
    // check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }

    // check for prefers-color-scheme
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkScheme ? "dark" : "light";
  }

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList = theme;
    localStorage.setItem("theme", theme);

    // listener for system color scheme changes
    function handleChange(e) {
      const newColorScheme = e.matches ? "dark" : "light";
      setTheme(newColorScheme);
    }

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    // clean-up function
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div className={styles.theme}>
      <span>Theme:</span> <p>{theme.at(0).toUpperCase() + theme.slice(1)}</p>
      <button
        onClick={toggleTheme}
        className={`${styles.button} ${theme === "light" && styles.rotate}`}
      >
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
}
