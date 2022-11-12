"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function HomePage() {
  const theme = useContext(ThemeContext);

  return <div>HomePage</div>;
}
