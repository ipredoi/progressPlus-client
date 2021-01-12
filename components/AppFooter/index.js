import React from 'react';
import styles from './appFooter.module.css';

function AppFooter() {
  return (
    <div className={styles.footer}>
      <footer className={styles.container}>
        <a href='https://github.com/' target='_blank'>
          <img
            className={styles.icons}
            src='/icons/github.png'
            alt='gitHub image'
          />
        </a>
        <a href='http://freecodecamp.org/' target='_blank'>
          <img
            className={styles.icons}
            src='/icons/free-code-camp.png'
            alt='freecodecamp image'
          />
        </a>
        <a href='https://stackoverflow.com/' target='_blank'>
          <img
            className={styles.icons}
            src='/icons/stack-overflow.png'
            alt='stackoverflow image'
          />
        </a>
        <a href='https://developer.mozilla.org/en-US/' target='_blank'>
          <img
            className={styles.icons}
            src='/icons/mozilla.png'
            alt='mdn image'
          />
        </a>
        <a href='https://www.codewars.com/' target='_blank'>
          <img
            className={styles.icons}
            src='/icons/codewars.png'
            alt='codewars image'
          />
        </a>
      </footer>
    </div>
  );
}
export default AppFooter;
