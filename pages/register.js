// Registration page for user to submit a form with details
// submit button sends the user information to database

import { useAuthContext } from '../firebaseAuthUtils/useAuthContext';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';
import { useState } from 'react';
import styles from '../styles/register.module.css';

const url = process.env.NEXT_APP_BACKEND_URL;
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
      <div className={styles.registerForm}>
        <img className={styles.loadingImg} src='/source.gif' alt='loadingImg' />
      </div>
    );
  }
  //console.log(session);
  return (
    <div className={styles.body}>
      {/* <h1 className='h1-welcome'>Hi {session.name}!</h1> */}
      <h1 className={styles.h1Welcome}>Welcome to APP NAME!</h1>
      <br />

      <div className={styles.registerForm}>
        <img
          id={styles.profilePicture}
          src={session.picture}
          alt='profile picture'
        />
        <form className={styles.form}>
          {/* <label>
            Name:
            <input type='text' name='displayName' value={session.name}></input>
          </label> */}
          <br />
          <label>
            Email:
            <input
              type='email'
              name='email'
              readOnly
              value={session.email}></input>
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

          <button id={styles.button} type='submit' onClick={registerUser}>
            Submit Form
          </button>
        </form>
        <button id={styles.button} onClick={logOut}>
          Logout
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const url = process.env.NEXT_APP_BACKEND_URL;

  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email, name, picture } = token;
    const res = await fetch(`http://localhost:5000/${uid}`);
    const data = await res.json();
    console.log(data.data[0].role.toLowerCase());
    context.res.writeHead(302, {
      Location: `/${data.data[0].role.toLowerCase()}`,
    });
    context.res.end();
    return {
      props: { session: { name, uid, email, picture } },
    };
  } catch (err) {
    context.res.writeHead(302, {
      Location: `/login`,
    });
    context.res.end();
    return { props: {} };
  }
}

//this async function is getting the cookies and allowing them to be used on this page
