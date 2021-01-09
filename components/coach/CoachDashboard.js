import React from 'react';
import styles from '../../styles/componentStyle/coachDashboard.module.css';

export default function DashboardDisplay() {
  return (
    <div className={styles.container}>
      <a href='/coach/feedback'>
        <img className={styles.icons} src='/notes.png' alt='submit feedback' />
        <p className={styles.link_text}>Submit feedback</p>
      </a>
      <a href='/coach/progress'>
        <img className={styles.icons} src='/diagram.png' alt='check progress' />
        <p className={styles.link_text}>Check progress</p>
      </a>
    </div>
  );
}
