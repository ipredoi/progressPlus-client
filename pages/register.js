// Registration page for user to submit a form with details
// submit button sends the user information to database
import styles from '../styles/pagesStyle/register.module.css';
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

import RegisterButton from '../Components/RegisterButton';

export default function Register({ session }) {
  const [role, setRole] = useState('');
  const [cohort, setCohort] = useState('');

  const { logOut } = useAuthContext();
  //we are using router to redirect the user after register to the coach/bootcamper page
  const router = useRouter();

  function registerUser(e) {
    e.preventDefault();
    if ((role !== '') & (cohort !== '')) {
      fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify({
          role: role,
          uid: '32ssdssssd12ss34tessdst', //session.uid, // ❗❗❗❗❗❗❗❗usinng a hardcoded string for testing ... to be repalced with session.uid
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
<<<<<<< HEAD
      <div className={styles.registerForm}>
        <img className={styles.loadingImg} src='/source.gif' alt='loadingImg' />
=======
      <div className={styles.body}>
        <div className={styles.registerForm}>
          <img
            className={styles.loadingImg}
            src='/source.gif'
            alt='loadingImg'
          />
        </div>
>>>>>>> def9f699b6a156f38f4bdf6d1ba479c7575344ed
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
          className={styles.profilePicture}
          src={session.picture}
          alt='profile picture'
        />
        <div className={styles.form}>
<<<<<<< HEAD
          <p className={styles.welcome}>Hi </p>
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
=======
          <p className={styles.pWelcome}>
            Hi
            {` ${session.name.replace(
              / .*/,
              ''
            )}, please submit your details to register`}
          </p>

          <DropdownMenu
            className={styles.dropdownMenu}
            option={rolesArr}
            placeHolder='Select SoC Role'
            handleClick={(e, data) => {
              setRole(data.value.toLowerCase());
            }}
          />
          <DropdownMenu
            className={styles.dropdownMenu}
            option={cohortArr}
            placeHolder='Select Current Cohort'
            handleClick={(e, data) => {
              setCohort(data.value);
            }}
          />

          <RegisterButton
            handleClick={registerUser}
            className={styles.registerButton}
            buttonText={`Submit the Form`}
          />
>>>>>>> def9f699b6a156f38f4bdf6d1ba479c7575344ed

          <RegisterButton
            handleClick={logOut}
            className={styles.signOutButton}
            buttonText={`Log Out`}
            color={'red'}
          />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email, name, picture } = token;

    //❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗ redirect works fine to be uncommented after testing register page
    //checking if the user already has an account, if they do then it will redirect them to the appropriate page (bootcamper/coach)
    /*   const res = await fetch(`${url}${uid}`);
    const data = await res.json();
    if (data.success === true) {
      context.res.writeHead(302, {
        Location: `/${data.data[0].role.toLowerCase()}`,
      });
      context.res.end();
    }
 */
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
