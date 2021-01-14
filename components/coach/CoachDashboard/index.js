import React from 'react';
import styles from './coachDashboard.module.css';

export default function CoachDashboard() {
  return (
    <div className={styles.container}>
      <a href='/feedback'>
        <img className={styles.icons} src='/notes.png' alt='submit feedback' />
        <p className={styles.link_text}>Submit feedback</p>
      </a>
      <a href='/progress'>
        <img className={styles.icons} src='/diagram.png' alt='check progress' />
        <p className={styles.link_text}>Check progress</p>
      </a>
    </div>
  );
}
