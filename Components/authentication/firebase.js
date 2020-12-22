import firebase from 'firebase/app';

const app = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};
//these are firebase credentials from the firebase account (details are in the .env file)

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(app);
  } catch (err) {
    console.error('Firebase initialization error raised', err.stack);
  }
}
//this if statement is to prevent firebase constantly rerendering and producing an error

export default app;
