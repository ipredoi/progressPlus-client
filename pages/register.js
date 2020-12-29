// Registration page for user to regist with email and create password
// register button links to Login page
import { useAuthContext } from '../firebaseAuthUtils/useAuthContext';
import '../public/register.css';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';
import { useState } from 'react';

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

export default function Register({ session }) {
  const { logOut } = useAuthContext();
  const [role, setRole] = useState('Bootcamper');
  const [cohort, setCohort] = useState('4');
  console.log(role);
  function registerUser(e) {
    e.preventDefault();
    fetch('http://localhost:5000/', {
      method: 'POST',
      body: JSON.stringify({
        role: role,
        uuid: session.uid,
        cohort: cohort,
      }),
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log('handlesubmit working');
  }

  if (!session) {
    return (
      <div class='register-form'>
        <img class='loadingImg' src='/source.gif' alt='loadingImg' />
      </div>
    );
  }
  //console.log(session);
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
          <select
            id='role'
            name='SocRole'
            onChange={(e) => {
              setRole(e.target.value);
            }}>
            <option value='bootcamper'>Bootcamper</option>
            <option value='coach'>Coach</option>
          </select>
          <br />
          <label cohort='cohort'>SoC Cohort:</label>
          <select
            id='cohortNumber'
            name='socCohort'
            onChange={(e) => {
              setCohort(e.target.value);
            }}>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
          </select>
          <br />

          <button id='form-submit-button' type='submit' onClick={registerUser}>
            Submit Form
          </button>
        </form>
        <button onClick={logOut}>Logout</button>
      </div>
    </div>
  );
}

//this async function is getting the cookies and allowing them to be used on this page
