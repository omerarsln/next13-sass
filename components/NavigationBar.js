"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./NavigationBar.module.scss";

export default function NavigationBar() {
  const themeContext = useContext(ThemeContext);
  const { colorMode, setColorMode } = themeContext;

  const handleClick = () => {
    colorMode == "light" ? setColorMode("dark") : setColorMode("light");
  };

  return (
    <div className={`${styles.container} ${styles[colorMode]}`}>
      <Link href="/">Anasayfa</Link>
      <Button onClick={handleClick}>Tema</Button>
    </div>
  );
}
