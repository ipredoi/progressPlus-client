import React from 'react';
import styles from './appFooter.module.css';

function AppFooter() {
  return (
    <div className={styles.footer}>
      <footer className={styles.container}>
        <a href='http://freecodecamp.org/' target='_blank'>
          <img
            className={styles.icons}
            src='/icons/free-code-camp.png'
            alt='Freecodecamp Icon'
          />
        </a>
        <a href='https://stackoverflow.com/' target='_blank'>
          <img
            className={styles.icons}
            src='/icons/stack-overflow.png'
            alt='Stackoverflow Icon'
          />
        </a>
        <a href='https://developer.mozilla.org/en-US/' target='_blank'>
          <img
            className={styles.icons}
            src='/icons/mozilla.png'
            alt='MDN Icon'
          />
        </a>
        <a href='https://www.codewars.com/' target='_blank'>
          <img
            className={styles.icons}
            src='/icons/codewars.png'
            alt='Codewars Icon'
          />
        </a>
      </footer>
    </div>
  );
}
export default AppFooter;
