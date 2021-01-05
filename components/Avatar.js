//need to work on a drop down onclick to show sign out option
import styles from '../styles/componentStyle/avatar.module.css';
import React from 'react';
import { Image } from 'semantic-ui-react';
import { useAuthContext } from '../firebaseAuthUtils/useAuthContext';

export default function Avatar({ src }) {
  const { open, setOpen } = useAuthContext();

  return (
    <div className="avatar">
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
