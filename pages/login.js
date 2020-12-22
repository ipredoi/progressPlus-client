// Login page for user to login with email and password
// or link to registration pages

import React from 'react';
import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCOLswdT4u003FCM5Q1RHXddpTlrnBB0tc',
    authDomain: 'ismail-esta.firebaseapp.com',
    projectId: 'ismail-esta',
    storageBucket: 'ismail-esta.appspot.com',
    messagingSenderId: '656502733705',
    appId: '1:656502733705:web:2180f0b277f0c3893d7f58',
  });
}

// const auth = config.auth();

export default function Login() {
  function login() {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    console.log(user);
    window.location = 'bootcamper.js';
  }

  firebase
    .auth()
    .getRedirectResult()
    .then(function (result) {
      if (result.credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
     console.log(user);
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      window.location = './login'; //After successful login, user will be redirected to bootcamper or coach html
    }
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
  }

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={login}>Login</button>
      <p>Not yet registered?</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
