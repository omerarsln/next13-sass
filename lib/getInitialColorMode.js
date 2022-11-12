import { bodyLight, bodyDark, textLight, textDark } from "../styles/_colors.module.scss";

export const getInitialColorMode = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem("color-mode");
      const hasPersistedPreference = typeof persistedColorPreference === "string";
  
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
  
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      const hasMediaQueryPreference = typeof mql.matches === "boolean";
      if (hasMediaQueryPreference) {
        return mql.matches ? "dark" : "light";
      }
      return "light";
    }

    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty('--color-body', colorMode === 'light' ? "${bodyLight}" : "${bodyDark}");
    root.style.setProperty('--color-text', colorMode === 'light' ? "${textLight}" : "${textDark}");
    root.style.setProperty('--initial-color-mode', colorMode);    
  })()
`;
