//all from semantic ui(avatar)
//need to work on a drop down onclick to show sign out option
import styles from '../styles/compnentStyle/avatar.module.css';
import React from 'react';
import { Image } from 'semantic-ui-react';

export default function Avatar({ src, name }) {
  return (
    <div className='avatar'>
      <Image src={src} className={styles.avatar} />
      <span className='profileName'>{name}</span>
    </div>
  );
}
