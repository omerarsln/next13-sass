"use client";
import React, { createContext, useLayoutEffect, useState } from "react";
import { bodyLight, bodyDark, textLight, textDark } from "../styles/_colors.module.scss";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined);

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue("--initial-color-mode");
    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (newValue) => {
    const root = window.document.documentElement;
    rawSetColorMode(newValue);
    localStorage.setItem("color-mode", newValue);
    root.style.setProperty("--color-body", newValue === "light" ? bodyLight : bodyDark);
    root.style.setProperty("--color-text", newValue === "light" ? textLight : textDark);
  };

  return <ThemeContext.Provider value={{ colorMode, setColorMode }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
