// Registration page for user to regist with email and create password
// register button links to Login page
import { useAuthContext } from '../firebaseAuthUtils/useAuthContext';
import '../public/register.css';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';

export default function Register({ session }) {
  const { logOut } = useAuthContext();

  if (!session) {
    return (
      <div class='register-form'>
        <img class='loadingImg' src='/source.gif' alt='loadingImg' />
      </div>
    );
  }
  console.log(session);
  return (
    <div>
      <h1 class='h1-welcome'>Hi,{session.name} !</h1>
      <h1 class='h1-welcome'>Welcome to APP NAME!</h1>
      <br />

      <div class='register-form'>
        <img id='profile-picture' src={session.picture} alt='profile picture' />
        <form>
          <label>
            Name:
            <input type='text' name='displayName' value={session.name}></input>
          </label>
          <br />
          <label>
            Email:
            <input type='email' name='email' value={session.email}></input>
          </label>
          <br />
          <label role='role'>SoC Role:</label>
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

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    console.log(token);
    const { uid, email, name, picture } = token;

    return {
      props: { session: { name, uid, email, picture } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return { props: {} };
  }
}

//this async function is getting the cookies and allowing them to be used on this page
