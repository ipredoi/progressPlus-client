import styles from './avatar.module.css';
import React from 'react';
import { Image } from 'semantic-ui-react';

export default function Avatar({ src }) {
  return (
    <div>
      <Image src={src} className={styles.avatar} />
    </div>
  );
}
