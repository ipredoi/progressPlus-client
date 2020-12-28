import React from 'react';
import { Button } from 'semantic-ui-react';
import { useUser } from '../firebaseAuth/useUser';

export default function SignOut() {
  const { user, logOut } = useUser();

  return (
    <div>
      <Button className='signout' color='red' onClick={logOut}>
        Sign Out
      </Button>
    </div>
  );
}
