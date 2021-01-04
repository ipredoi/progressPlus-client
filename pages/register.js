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
import DropdownMenu from '../components/register/DropdownMenu';
import InputField from '../components/InputField';
import RegisterButton from '../components/RegisterButton';

export default function Register({ session }) {
  const [role, setRole] = useState('');
  const [cohort, setCohort] = useState('');
  const [name, setName] = useState('');

  const { logOut } = useAuthContext();
  //we are using router to redirect the user after register to the coach/bootcamper page
  const router = useRouter();

  //function to post the new user to the DB
  function registerUser(e) {
    e.preventDefault();
    if ((role !== '') & (cohort !== '')) {
      fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify({
          role: role,
          uid: '32ssdssssd12ss34tessdst', //session.uid, // ❗usinng a hardcoded string for testing ... to be repalced with session.uid
          cohort: cohort,
          name: session.name ? session.name : name, //if session.name does not contain a name, user inputted name will be posted
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
      // redirecting the user to coach/ bootcamper page after submit
      router.push(`/${role.toLowerCase()}`);
    } else {
      alert('Please fill all the required fields');
    }
  }

  if (!session) {
    return (
      <div className={styles.body}>
        <div className={styles.registerForm}>
          <img
            className={styles.loadingImg}
            src="/source.gif"
            alt="loadingImg"
          />
        </div>
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
          alt="profile picture"
        />
        <div className={styles.form}>
          {/*  conditionally render the wellcome message if there is no username from github */}
          {session.name === 'No name' ? (
            <p className={styles.pWelcome}>
              Hi, please submit your details to register
            </p>
          ) : (
            <p className={styles.pWelcome}>
              {/*  getting the first name from session  */}
              Hi
              {` ${session.name.replace(
                / .*/,
                ''
              )}, please submit your details to register`}
            </p>
          )}

          {/* if user has no name imported from GitHub, an input field will render inviting them to input their name */}
          {session.name === 'No name' ? (
            <InputField
              placeholder="Name"
              className={styles.inputField}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            ''
          )}
          <DropdownMenu
            className={styles.dropdownMenu}
            option={rolesArr}
            placeHolder="Select SoC Role"
            handleClick={(e, data) => {
              setRole(data.value.toLowerCase());
            }}
          />
          <DropdownMenu
            className={styles.dropdownMenu}
            option={cohortArr}
            placeHolder="Select Current Cohort"
            handleClick={(e, data) => {
              setCohort(data.value);
            }}
          />

          <RegisterButton
            handleClick={registerUser}
            className={styles.registerButton}
            buttonText={`Submit the Form`}
          />

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
    let { name, uid, email, picture } = token;

    //if user has no name on GitHub, name will be set to 'No name ❗ to test the functionality remove the exclamation mark'
    if (!name) {
      name = 'No name';
    }

    //❗ redirect works fine to be uncommented after testing register page
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
