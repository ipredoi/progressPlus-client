import React from "react";
import styles from "../styles/componentStyle/appFooter.module.css";

function AppFooter() {
  return (
    <div className={styles.footer}>
      <footer className={styles.container}>
        <a href='https://github.com/' target='_blank'>
          <img
            className={styles.icons}
            src='/icons/gitHub.png'
            alt='gitHub image'
          />
        </a>
        <a href='http://freecodecamp.org/' target='_blank'>
          <img
            className={styles.icons}
            src='/icons/freecodecamp.png'
            alt='freecodecamp image'
          />
        </a>
        <a href='https://stackoverflow.com/' target='_blank'>
          <img
            className={styles.icons}
            src='/icons/stackoverflow.png'
            alt='stackoverflow image'
          />
        </a>
      </footer>
    </div>
  );
}
export default AppFooter;
