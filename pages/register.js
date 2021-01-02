// Registration page for user to submit a form with details
// submit button sends the user information to database
import styles from '../styles/register.module.css';
import { useAuthContext } from '../firebaseAuthUtils/useAuthContext';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { url } from '../libs/globalVariables/backendUrl';
import {
  rolesArr,
  cohortArr,
} from '../libs/globalVariables/registerUserArrays';
import DropdownMenu from '../Components/register/DropdownMenu';

export default function Register({ session }) {
  const { logOut } = useAuthContext();
  const [role, setRole] = useState('');
  const [cohort, setCohort] = useState('');

  //we are using router to redirect the user after register to the coach/bootcamper page
  const router = useRouter();

  function registerUser(e) {
    e.preventDefault();
    if ((role !== '') & (cohort !== '')) {
      fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify({
          role: role,
          uid: 'fsadas488xsdsd5cxssddsfsa3sa4' /* session.uid */, // usinng a hardcoded string for testing ... to be repalced with session.uid
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
    } else {
      alert('Please fill all the required fields');
    }
  }

  if (!session) {
    return (
      <div className={styles.registerForm}>
        <img className={styles.loadingImg} src='/source.gif' alt='loadingImg' />
      </div>
    );
  }

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
        <div className={styles.form}>
          <p className={styles.welcome}>
            Hi{' '}
            {`${session.name.replace(
              / .*/,
              ''
            )}, please submit your details to register`}
          </p>
          <div className={styles.role}>
            <DropdownMenu
              className={styles.dropdownMenu}
              option={rolesArr}
              placeHolder='Select SoC Role'
              handleClick={(e, data) => {
                setRole(data.value.toLowerCase());
              }}
            />
            <DropdownMenu
              option={cohortArr}
              placeHolder='Select SoC Cohort'
              handleClick={(e, data) => {
                setCohort(data.value);
              }}
            />
          </div>

          <button id={styles.button} type='submit' onClick={registerUser}>
            Submit Form
          </button>

          <button id={styles.button} onClick={logOut}>
            Logout
          </button>
        </div>
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
