// Registration page for user to regist with email and create password
// register button links to Login page
import { useUser } from '../firebaseAuth/useUser';
import '../styles/register.css';
/* import Link from 'next/link'; */

function Register() {
  const { user, logOut } = useUser();
  console.log(user);
  if (!user) {
    return <></>;
  }
  return (
    <div>
      <h1>Hi, {user.displayName}</h1>
      <h1>Welcome to APP NAME</h1>
      <div class='register-form'>
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
            <option value='mentor'>Mentor</option>
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
