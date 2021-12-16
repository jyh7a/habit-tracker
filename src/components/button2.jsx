import React, { Component } from "react";
import styles from "./button2.module.css";

export class Button2 extends Component {
  render() {
    return (
      <div className={styles.button}>
        <span className={styles.text}>Button1</span>
      </div>
    );
  }
}

export default Button2;
