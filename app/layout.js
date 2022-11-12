import React from "react";
import NavigationBar from "../components/NavigationBar";
import { getInitialColorMode } from "../lib/getInitialColorMode";
import "../styles/_globals.scss";
import ThemeProvider from "../context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <title>Next JS</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: getInitialColorMode,
          }}
        />
        <ThemeProvider>
          <NavigationBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
