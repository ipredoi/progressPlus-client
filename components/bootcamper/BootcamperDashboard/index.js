import React from 'react';
import styles from './bootcamperDashboard.module.css';

export default function BootcamperDashboard() {
  return (
    <div className={styles.container}>
      <a href="/masterytasks" className={styles.imageLink}>
        <img
          className={styles.icons}
          src="/diagram.png"
          alt="mastery graph image"
        />
        <p className={styles.link_text}>Mastery tasks</p>
      </a>
      <a href="/recaptasks" className={styles.imageLink}>
        <img
          className={styles.icons}
          src="/bar-chart.png"
          alt="recap graph image"
        />
        <p className={styles.link_text}>Recap tasks</p>
      </a>
    </div>
  );
}
