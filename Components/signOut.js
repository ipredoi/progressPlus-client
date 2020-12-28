import React from 'react';
import { Button } from 'semantic-ui-react';
import { useUser } from '../firebaseAuthUtils/useUser';

export default function SignOut() {
  const { logOut } = useUser();

  return (
    <div>
      <Button className='signout' color='red' onClick={logOut}>
        Sign Out
      </Button>
    </div>
  );
}
