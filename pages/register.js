// Registration page for user to submit a form with details
// submit button sends the user information to database

import { useAuthContext } from '../firebaseAuthUtils/useAuthContext';
import '../public/register.css';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { url } from '../libs/globalVariables/backendUrl';


export default function Register({ session }) {
  const { logOut } = useAuthContext();
  const [role, setRole] = useState('Bootcamper');
  const [cohort, setCohort] = useState('4');

  //we are using router to redirect the user after register to the coach/bootcamper page 
  const router = useRouter();

  function registerUser(e) {
    e.preventDefault();
    fetch(`${url}`, {
      method: 'POST',
      body: JSON.stringify({
        role: role,
        uid: 'fsadas488xsdsd5cxssdds' /* session.uid */,
        cohort: cohort,
        name: session.name,
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
    router.push(`/${role.toLowerCase()}`);
  }

  if (!session) {
    return (
      <div className='register-form'>
        <img className='loadingImg' src='/source.gif' alt='loadingImg' />
      </div>
    );
  }

  return (
    <div>
      <h1 className='h1-welcome'>Hi {session.name}!</h1>
      <h1 className='h1-welcome'>Welcome to APP NAME!</h1>
      <br />

      <div className='register-form'>
        <img id='profile-picture' src={session.picture} alt='profile picture' />
        <form>
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

          <button id='form-submit-button' type='submit' onClick={registerUser}>
            Submit Form
          </button>
        </form>
        <button onClick={logOut}>Logout</button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(url);
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email, name, picture } = token;
    /* const res = await fetch(`${url}${uid}`);
    const data = await res.json();
    console.log(data.data[0].role.toLowerCase());
    context.res.writeHead(302, {
      Location: `/${data.data[0].role.toLowerCase()}`,
    });
    context.res.end(); */
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
