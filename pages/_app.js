import React from 'react';
import { AuthProvider } from '../Components/authentication/authContext';
import app from '../components/authentication/firebase';
import firebase from 'firebase/app';

function MyApp({ Component, pageProps }) {
  if (!firebase.apps.length) {
    try {
      firebase.initializeApp(app);
    } catch (err) {
      console.error('Firebase initialization error raised', err.stack);
    }
  }
  //this if statement is to prevent firebase constantly rerendering and producing an error

  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default MyApp;

//The <Component {...pageProps} /> part represents individual pages. When you navigate between different pages of your website, only the children data of <Component {...pageProps} /> changes.
