import React from 'react';
import styles from '../styles/componentStyle/appFooter.module.css';

function AppFooter() {
  return (
    <div className={styles.footer}>
      <footer className={styles.container}>
        <a href='https://github.com/' target='_blank'>
          <i className={`fab fa-github fa-3x ${styles.icons}`}></i>
        </a>
        <a href='http://freecodecamp.org/' target='_blank'>
          <i className={`fab fa-free-code-camp fa-3x ${styles.icons}`}></i>
        </a>
        <a href='https://stackoverflow.com/' target='_blank'>
          <i className={`fab fa-stack-overflow fa-3x ${styles.icons}`}></i>
        </a>
      </footer>
    </div>
  );
}
export default AppFooter;
