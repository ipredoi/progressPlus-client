import React from 'react';
import { Button } from 'semantic-ui-react';
import { useAuthContext } from '../firebaseAuthUtils/useAuthContext';
import styles from '../styles/componentStyle/logOutButton.module.css';
export default function LogOutButton() {
  const { logOut } = useAuthContext();
  return (
    <div>
      <Button className={styles.signOutButton} onClick={logOut} color='red'>
        Log Out
      </Button>
    </div>
  );
}
