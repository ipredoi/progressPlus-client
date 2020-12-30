import React from 'react';
import { Button } from 'semantic-ui-react';
import { useAuthContext } from '../firebaseAuthUtils/useAuthContext';
export default function SignOut() {
  const { logOut } = useAuthContext();

  return (
    <div>
      <Button className='signout' color='red' onClick={logOut}>
        Sign Out
      </Button>
    </div>
  );
}
