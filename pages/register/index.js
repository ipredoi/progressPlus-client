// Registration page for user to submit a form with details
// submit button sends the user information to database
import { useAuthContext } from '../../firebaseUtils/useAuthContext';
import nookies from 'nookies';
import { verifyIdToken } from '../../firebaseUtils/firebaseAdmin';
import { useState, useEffect } from 'react';
import DropdownMenu from '../../components/authentication/DropdownMenu';
import InputField from '../../components/authentication/InputField';
import RegisterButton from '../../components/authentication/RegisterButton';
import registerUser from '../../libs/functions/registerUser';
import styles from './register.module.css';
import {
  rolesDropdownProps,
  cohortDropdownProps,
  nameFieldProps,
  submitButtonProps,
  logOutButtonProps,
} from './props';

export default function Register({ session }) {
  const [newUserData, setNewUserData] = useState({});
  const [submit, setSubmit] = useState(false);

  const { logOut, router } = useAuthContext();
  //we are using router to redirect the user after register to the coach/bootcamper page

  //user redirected to appropriate page after submitting form
  useEffect(() => {
    if (submit === true) {
      router.push(`/${newUserData.role.toLowerCase()}`);
    }
  }, [submit]);

  return (
    <div className={styles.body}>
      <div className={styles.registerForm}>
        <img
          className={styles.profilePicture}
          src={session.picture}
          alt='Profile Picture'
        />
        <div className={styles.form}>
          {/*  conditionally render the welcome message if there is no username from github */}
          {session.name === 'No name' ? (
            <p className={styles.pWelcome}>Submit your details to register</p>
          ) : (
            <p className={styles.pWelcome}>
              {/*  getting the first name from session  */}
              Hi
              {` ${session.name.replace(
                / .*/,
                ''
              )}, submit your details to register`}
            </p>
          )}

          {/* if user has no name imported from GitHub, an input field will render inviting them to input their name */}
          {session.name === 'No name' ? (
            <InputField
              {...nameFieldProps}
              onChange={(e) => {
                setNewUserData({ ...newUserData, name: e.target.value });
              }}
            />
          ) : (
            ''
          )}
          <DropdownMenu
            {...rolesDropdownProps}
            handleClick={(e, data) => {
              setNewUserData({
                ...newUserData,
                role: data.value.toLowerCase(),
              });
            }}
          />
          <DropdownMenu
            {...cohortDropdownProps}
            handleClick={(e, data) => {
              setNewUserData({ ...newUserData, cohort: data.value });
            }}
          />

          <RegisterButton
            {...submitButtonProps}
            handleClick={(event) => {
              registerUser(event, newUserData, session, setSubmit);
            }}
          />
          <RegisterButton {...logOutButtonProps} handleClick={logOut} />
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
      Location: `/`,
    });
    context.res.end();
    return { props: {} };
  }
}

//this async function is getting the cookies and allowing them to be used on this page
