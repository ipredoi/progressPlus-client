import React from 'react';
import styles from '../styles/componentStyle/appFooter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fabGithub } from '@fortawesome/free-solid-svg-icons';

function AppFooter() {
  return (
    <div className={styles.footer}>
      <footer className={styles.container}>
        <a href='https://github.com/' target='_blank'>
          <FontAwesomeIcon icon={fabGithub} />
          {/* <i
            aria-hidden='true'
            className={`fab fa-github fa-3x ${styles.icons}`}></i> */}
        </a>
        <a href='http://freecodecamp.org/' target='_blank'>
          <i
            aria-hidden='true'
            className={`fab fa-free-code-camp fa-3x ${styles.icons}`}></i>
        </a>
        <a href='https://stackoverflow.com/' target='_blank'>
          <i
            aria-hidden='true'
            className={`fab fa-stack-overflow fa-3x ${styles.icons}`}></i>
        </a>
      </footer>
    </div>
  );
}
export default AppFooter;
