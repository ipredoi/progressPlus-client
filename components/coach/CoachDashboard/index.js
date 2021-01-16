import React from 'react';
import styles from './coachDashboard.module.css';
import Link from 'next/link';
export default function CoachDashboard() {
  return (
    <div className={styles.container}>
      <Link href='/coach/feedback'>
        <a className={styles.imageLink}>
          <img
            className={styles.icons}
            src='/notes.png'
            alt='submit feedback'
          />
          <p className={styles.link_text}>Submit feedback</p>
        </a>
      </Link>
      <Link href='/coach/progress'>
        <a className={styles.imageLink}>
          <img
            className={styles.icons}
            src='/diagram.png'
            alt='check progress'
          />
          <p className={styles.link_text}>Check progress</p>
        </a>
      </Link>
    </div>
  );
}
