import React from 'react';
import styles from './loadingImg.module.css';

const LoadingImg = () => {
  return (
    <div className={styles.body}>
      <div className={styles.square}>
        <img
          className={styles.loadingImg}
          src='/source.gif'
          alt='Loading Image'
        />
        <h1 className={styles.loadingMsg}>Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingImg;
