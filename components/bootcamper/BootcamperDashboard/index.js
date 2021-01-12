import React from "react";
import styles from "./bootcamperDashboard.module.css";

export default function BootcamperDashboard() {
  return (
    <div className={styles.container}>
      <a href='/bootcamper/masterytasks'>
        <img
          className={styles.graph}
          src='/diagram.png'
          alt='mastery graph image'
        />
        <p className={styles.link_text}>Mastery tasks</p>
      </a>
      <a href='/bootcamper/recaptasks'>
        <img
          className={styles.graph}
          src='/bar-chart.png'
          alt='recap graph image'
        />
        <p className={styles.link_text}>Recap tasks</p>
      </a>
    </div>
  );
}
