// Create the authContext to pass the user properties between pages as long as an user is authenticated

import { useEffect, useState, createContext, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import nookies from 'nookies';

// import firebase initialisation function
import firebaseInit from './firebaseInit';

// import useRouter hook from nextjs
import { useRouter } from 'next/router';

// call the function to initialise firebase
firebaseInit();

//useUser custom hook

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  //set the initial state of the user to null
  const [user, setUser] = useState();
  //save the useRouter hook in a const named router
  const router = useRouter();

  // logOut function

  function logOut() {
    // after user logs out, he will be redirected to the login page using next useRouter hook
    return firebase
      .auth()
      .signOut()
      .then(() => {
        router.push('/login');
      })
      .catch((e) => {
        console.log(error(e));
      });
  }

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      console.log('auth changed');
      console.log(user ? user : 'Nothing');
      if (!user) {
        setUser(null);
        nookies.set(undefined, 'token', '', {});
        return;
      }

      const token = await user.getIdToken();
      // console.log(token);
      setUser(user);
      nookies.set(undefined, 'token', token, {});
    });
  }, []);

  //return the Auth context provider
  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
