// Login page for user to login with email and password
// or link to registration pages
const firebase = require('firebase');
import 'firebase/auth';

function Login() {
  var provider = new firebase.auth.GithubAuthProvider();

  firebase.auth().signInWithRedirect(provider);

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
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  return (
    <div>
      <h1>Login page</h1>
      <input type='text' placeholder='email' />
      <input type='text' placeholder='password' />
      <br />
      <button>Submit</button>
      <p>Not yet registered?</p>
      <button>Register</button>
    </div>
  );
}
export default Login;
