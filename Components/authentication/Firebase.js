//use react-firebaseui library follow docs at https://www.npmjs.com/package/react-firebaseui

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseInit from '../../firebaseAuthUtils/firebaseInit';

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
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
