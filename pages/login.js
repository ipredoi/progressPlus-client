import React, { useContext } from 'react';
import { AuthContext } from '../components/authentication/authContext';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FaGithub } from 'react-icons/fa';

export default function Login() {
  const { user } = useContext(AuthContext);

  function login() {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     window.location = '/bootcamper'; //After successful login, user will be redirected to bootcamper or coach page
  //   }
  // });
  //code above means when user is logged in, it goes straight to the bootcamper page. Atm the sign out button only works on the login page so if you want to access this then comment out the above AuthState code.

  firebase
    .auth()
    .getRedirectResult()
    .then(function (result) {
      if (result.credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const token = result.credential.accessToken;
        // ...
        const user = result.user;
        console.log(user);
      }
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      console.log(email);
    });

  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log('signed out');
      })
      .catch(function (error) {
        // An error happened.
        console.log(error.message);
      });
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        window.location = '/login'; //After successful login, user will be redirected to bootcamper or coach page
      }
      console.log(user);
    });
  }

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={login}>
        Login with GitHub
        <FaGithub />
      </button>
      <br />
      <br />
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
