// Registration page for user to submit a form with details
// submit button sends the user information to database

import { useEffect, useState } from "react";

import { backendUrl } from "../../libs/globalVariables/urls";
import { useAuthContext } from "../../firebaseUtils/useAuthContext";
import nookies from "nookies";
import useFormSubmit from "../../libs/customHooks/useFormSubmit";
import validateRegisterForm from "../../libs/functions/Register/validateRegisterForm";
import { verifyIdToken } from "../../firebaseUtils/firebaseAdmin";
import LoginBackgroundImg from "../../components/LoginBackgroundImg";
import DropdownMenu from "../../components/authentication/DropdownMenu";
import InputField from "../../components/authentication/InputField";
import RegisterButton from "../../components/authentication/RegisterButton";
import registerUser from "../../libs/functions/Register/postRequest";
import styles from "./register.module.css";
import {
  rolesDropdownProps,
  cohortDropdownProps,
  surnameFieldProps,
  forenameFieldProps,
  submitButtonProps,
  logOutButtonProps,
} from "../../libs/variables/registerPageProps";
// initial values object -> all the values have the initial state of ""
// the state will be changed when the form will be updated

export default function Register({ session }) {
  const { logOut, router } = useAuthContext();
  const [serverErr, setServerErr] = useState(null);
  //we are using router to redirect the user after register to the coach/bootcamper page
  const valuesInitialState = {
    role: "",
    cohort: 0,
    forename: "",
    uid: `${session.uid}`,
  };

  // what fields we want cleared after submit
  const resetState = {
    //role: '',
    cohort: 0,
    surname: "",
  };
  let { token } = session;

  // destructuring data coming from the useFormSubmit custom hook
  // the hook takes in the valuesInitialState object, validateFeedback form function which checks if there are any errors in the form and the feedbackPost function to submit data to database
  const {
    handleChange,
    handleSubmit,
    dropDownHandleChange,
    isSubmitting,
    values,
    errors,
    postSuccessful,
  } = useFormSubmit(
    valuesInitialState,
    resetState,
    validateRegisterForm,
    registerUser,
    token,
    setServerErr
  );

  /*  useEffect(() => {
    if (postSuccessful) {
      Router.push(`/${values.role.toLowerCase()}`);
    }
  }); */

  return (
    <div className={styles.body}>
      <LoginBackgroundImg />

      <div className={styles.registerForm}>
        <img
          className={styles.profilePicture}
          src={session.picture}
          alt='profile picture'
        />
        <div className={styles.form}>
          <p className={styles.pWelcome}>
            {`Please submit your details to register`}
          </p>
          <InputField {...forenameFieldProps} onChange={handleChange} />
          <InputField {...surnameFieldProps} onChange={handleChange} />

          <DropdownMenu
            {...rolesDropdownProps}
            handleClick={dropDownHandleChange}
          />
          {values.role === "Bootcamper" && (
            <DropdownMenu
              {...cohortDropdownProps}
              handleClick={dropDownHandleChange}
            />
          )}
          {/* if errors, they will be displayed here */}
          {errors && (
            <div>
              {errors.forename && (
                <p className={styles.errorText}>{errors.forename}</p>
              )}
              {errors.surname && (
                <p className={styles.errorText}>{errors.surname}</p>
              )}
              {errors.role && <p className={styles.errorText}>{errors.role}</p>}
              {errors.cohort && (
                <p className={styles.errorText}>{errors.cohort}</p>
              )}
              {errors.uid && <p className={styles.errorText}>{errors.uid}</p>}
              {serverErr && <p className={styles.errorText}>{serverErr}</p>}
            </div>
          )}

          <RegisterButton
            {...submitButtonProps}
            disabled={isSubmitting}
            handleClick={(e) => {
              handleSubmit(e);
            }}
          />

          <RegisterButton handleClick={logOut} {...logOutButtonProps} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const { token } = cookies;
    const sessionData = await verifyIdToken(cookies.token);

    let { name, uid, email, picture } = sessionData;
    //if user has no name on GitHub, name will be set to 'No name ❗ to test the functionality remove the exclamation mark'
    console.log({ sessionData });
    if (!name) {
      name = "No name";
    }

    // ❗ redirect works fine to be uncommented after testing register page
    // checking if the user already has an account, if they do then it will redirect them to the appropriate page (bootcamper/coach)
    const res = await fetch(`${backendUrl}${uid}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    console.log(data);
    if (data.success === true && data.data[0] !== undefined) {
      context.res.writeHead(302, {
        Location: `/${data.data[0].role.toLowerCase()}`,
      });
      context.res.end();
    }

    return {
      props: { session: { name, uid, email, picture, token } },
    };
  } catch (err) {
    console.log(err);
    context.res.writeHead(302, {
      Location: `/`,
    });
    context.res.end();
    return { props: {} };
  }
}

//this async function is getting the cookies and allowing them to be used on this page
