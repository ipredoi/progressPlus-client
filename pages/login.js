// Login page for user to login with email and password
// or link to registration pages
const firebase = require('firebase');
import 'firebase/auth';
import React from 'react';

export default function Login() {
  function firebaseConfig() {
    var firebaseConfig = {
      apiKey: process.env.NEXT_APP_API_KEY,
      authDomain: process.env.NEXT_APP_AUTH_DOMAIN,
      projectId: process.env.NEXT_APP_PROJECT_ID,
      storageBucket: process.env.NEXT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_APP_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_APP_APP_ID,
    };

    firebase.initializeApp(firebaseConfig);

    var provider = new firebase.auth.GithubAuthProvider();

    function signIn() {
      firebase.auth().signInWithRedirect(provider);
    }

    firebase
      .auth()
      .getRedirectResult()
      .then(function (result) {
        if (result.credential) {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          var token = result.credential.accessToken;
          console.log(token);
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

    return (
      <div>
        <h1>Login page</h1>
        <script src='https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js'></script>
        <br />
        <button onClick={signIn}>Submit</button>
        <p>Not yet registered?</p>
        <button>Register</button>
      </div>
    );
  }
}
