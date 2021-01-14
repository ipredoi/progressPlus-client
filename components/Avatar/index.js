import styles from './avatar.module.css';
import React from 'react';
import { Image } from 'semantic-ui-react';
import { useAuthContext } from '../../firebaseUtils/useAuthContext';

export default function Avatar({ src }) {
  const { open, setOpen } = useAuthContext();

  return (
    <div>
      <Image
        src={src}
        className={styles.avatar}
        onClick={() => {
          setOpen(!open);
        }}
      />
    </div>
  );
}
