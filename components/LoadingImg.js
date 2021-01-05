import React from 'react';
import styles from '../styles/componentStyle/LoadingImg.module.css';

const LoadingImg = () => {
  return (
    <div className={styles.body}>
      <div className={styles.square}>
        <img className={styles.loadingImg} src='/source.gif' alt='loadingImg' />
        <h1 className={styles.loadingMsg}>Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingImg;
