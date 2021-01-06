import React from 'react';
import styles from '../styles/componentStyle/footer.module.css';

function Footer() {
  return (
    <footer className={styles.container}>
      <i class='fab fa-github'></i>
      <i class='fab fa-free-code-camp'></i>
      <i class='fab fa-stack-overflow'></i>
    </footer>
  );
}

export default Footer;
