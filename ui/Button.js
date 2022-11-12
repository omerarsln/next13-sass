import React from "react";
import styles from "./Button.module.scss";

export default function Button({ children, ...rest }) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
