// useUser --> react custom hook to pass the user data through pages components

import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

//import cookie functions
import {
  setUserAuthCookie,
  removeUserAuthCookie,
  getUserDataFromCookie,
} from '../firebaseAuthUtils/userCookies';

// import function to get user data & token
import { getUserData } from '../firebaseAuthUtils/userData';

// import firebase initialisation function
import firebaseInit from './firebaseInit';

// import useRouter hook from nextjs
import { useRouter } from 'next/router';

// call the function to initialise firebase

firebaseInit();

//useUser custom hook

function useUser() {
  //set the initial state of the user to null
  const [user, setUser] = useState();
  //save the useRouter hook in a const named router
  const router = useRouter();

  // logOut function

  async function logOut() {
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
    // when token refreshes we need to know if the user is still signed in and if they are, we need to set the user with setUser
    const checkIfUserStillSignedIn = firebase
      .auth()
      .onIdTokenChanged(async (user) => {
        if (user) {
          //listen for token changes, if there is an user, write the new token as a cookie and call setUser
          let userData = await getUserData(user);
          setUserAuthCookie(userData);
          setUser(userData);
        } else {
          // if there is no user, then remove the user cookie and call the set user
          removeUserAuthCookie();
          setUser();
        }
      });

    // when the page loads, we want to see access data from cookie
    // if there is no data from cookie,then user will be redirected to login page with useRouter hook from nextJS
    // if there is data from cookie, call the setUser
    //

    const userDataFromCookie = getUserDataFromCookie();
    if (!userDataFromCookie) {
      router.push('/register');
      return;
    }
    //setUser(userDataFromCookie);
    return () => {
      checkIfUserStillSignedIn();
    };
  }, []);

  // the useUser hook returns the user object and the logout function
  return { user, logOut };
}

export { useUser };
