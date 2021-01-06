import React from 'react';
import styles from '../../styles/componentStyle/dashboardDisplay.module.css';

export default function DashboardDisplay() {
  return (
    <div className={styles.container}>
      <a href="/recaptasks">
        <img
          className={styles.graph}
          src="/bar-chart.png"
          alt="recap graph image"
        />
        <p className={styles.link_text}>Recap tasks</p>
      </a>
      <a href="/masterytasks">
        <img
          className={styles.graph}
          src="/diagram.png"
          alt="mastery graph image"
        />
        <p className={styles.link_text}>Mastery tasks</p>
      </a>
    </div>
  );
}
