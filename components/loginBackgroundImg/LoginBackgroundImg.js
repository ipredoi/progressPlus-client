import React from 'react';
import styles from './LoginBackgroundImg.module.css';
import Image from 'next/image';

export default function LoginBackgroundImg() {
  return (
    <div>
      <div className={styles.planetSocImg}>
        <Image
          src='/planet_soc.png'
          alt='School of Code Logo'
          width={400}
          height={450}
        />
      </div>
      <div className={styles.moonSocImg}>
        <Image src='/moon.png' alt='Moon Image' layout='fill' />
      </div>
      <div className={styles.astronautImg}>
        <Image
          src='/astronaut.png'
          alt='School of Code Logo'
          width={450}
          height={450}
        />
      </div>
    </div>
  );
}
