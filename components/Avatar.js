//need to work on a drop down onclick to show sign out option
import styles from '../styles/componentStyle/avatar.module.css';
import React from 'react';
import { Image } from 'semantic-ui-react';

export default function Avatar({ src, visible, setVisible }) {
  function handleClick() {
    setVisible(!visible);
  }

  return (
    <div className='avatar'>
      <Image src={src} className={styles.avatar} onClick={handleClick} />
    </div>
  );
}
