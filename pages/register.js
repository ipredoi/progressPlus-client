// Registration page for user to regist with email and create password
// register button links to Login page
import { useUser } from '../firebaseAuthUtils/useUser';
import '../public/register.css';
/* import Link from 'next/link'; */
import Image from 'next/image';

function Register() {
  const { user, logOut } = useUser();
  console.log(user);
  if (!user) {
    return (
      <div class='register-form'>
        <img class='loadingImg' src='/source.gif' alt='loadingImg' />
      </div>
    );
  }
  return (
    <div>
      <h1 class='h1-welcome'>Hi, {user.displayName}!</h1>
      <h1 class='h1-welcome'>Welcome to APP NAME!</h1>
      <br />

      <div class='register-form'>
        <img id='profile-picture' src={user.photoURL} alt='profile picture' />
        <form>
          <label>
            Name:
            <input
              type='text'
              name='displayName'
              value={user.displayName}></input>
          </label>
          <br />
          <label>
            Email:
            <input type='email' name='email' value={user.email}></input>
          </label>
          <br />
          <label for='role'>SoC Role:</label>
          <select id='role' name='SocRole'>
            <option value='bootcamper'>Bootcamper</option>
            <option value='coach'>Coach</option>
          </select>
          <br />

          <button id='form-submit-button' type='submit'>
            Submit Form
          </button>
        </form>
        <button onClick={logOut}>Logout</button>
      </div>
    </div>
  );
}
export default Register;
