//use react-firebaseui library follow docs at https://www.npmjs.com/package/react-firebaseui

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseInit from '../../../firebaseUtils/firebaseInit';
import styles from './firebase.module.css';
//call the function for Firebase Initialisation
firebaseInit();

const uiConfig = {
  // popup signin flow rather than redirect
  signInFlow: 'redirect',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/register',
  //display gitHub provider
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

export default function FirebaseAuth() {
  return (
    <div>
      <StyledFirebaseAuth
        className={styles.button}
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
}
