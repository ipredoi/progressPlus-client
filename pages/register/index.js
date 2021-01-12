// Registration page for user to submit a form with details
// submit button sends the user information to database
import styles from './register.module.css';
import { useAuthContext } from '../../firebaseAuthUtils/useAuthContext';
import nookies from 'nookies';
import { verifyIdToken } from '../../firebaseAuthUtils/firebaseAdmin';
import { useRouter } from 'next/router';
import {
  rolesArr,
  cohortArr,
} from '../../libs/globalVariables/registerUserArrays';
import DropdownMenu from '../../components/register/DropdownMenu';
import InputField from '../../components/InputField';
import RegisterButton from '../../components/RegisterButton';
import LoadingImg from '../../components/LoadingImg';
import useFormSubmit from '../../libs/customHooks/useFormSubmit';
import registerUser from '../../libs/functions/Register/postRequest';
import validateRegisterForm from '../../libs/functions/Register/validateRegisterForm';
// initial values object -> all the values have the initial state of ""
// the state will be changed when the form will be updated
const valuesInitialState = {
  role: '',
  cohort: '',
  forename: '',
  surname: '',
  uid: '',
};
export default function Register({ session }) {
  valuesInitialState.uid = session.uid;
  //we are using router to redirect the user after register to the coach/bootcamper page
  const router = useRouter();

  // destructuring data coming from the useFormSubmit custom hook
  // the hook takes in the valuesInitialState object, validateFeedback form function which checks if there are any errors in the form and the feedbackPost function to submit data to database
  const {
    handleChange,
    handleSubmit,
    dropDownHandleChange,
    isSubmitting,
    values,
    errors,
  } = useFormSubmit(valuesInitialState, validateRegisterForm, registerUser);
  const { logOut } = useAuthContext();

  if (!session) {
    return <LoadingImg />;
  }
  return (
    <div className={styles.body}>
      <div>
        {/* if errors, they will be displayed here */}
        {errors
          ? () => {
              for (const [key, value] of Object.entries(errors)) {
                return <p className={styles.errortext}>{value}</p>;
              }
            }
          : null}
      </div>
      <div className={styles.registerForm}>
        <img
          className={styles.profilePicture}
          src={session.picture}
          alt="profile picture"
        />
        <div className={styles.form}>
          <p className={styles.pWelcome}>
            {`Hi ${values.forename}, please submit your details to register`}
          </p>
          <InputField
            placeholder="Forename"
            name="forename"
            className={errors.forename && styles.inputField}
            onChange={handleChange}
          />
          <InputField
            placeholder="Surname"
            name="surname"
            className={errors.surname && styles.inputField}
            onChange={handleChange}
          />

          <DropdownMenu
            className={errors.role && styles.dropdownMenu}
            option={rolesArr}
            name="role"
            placeHolder="Select SoC Role"
            handleClick={dropDownHandleChange}
          />
          <DropdownMenu
            className={errors.cohort && styles.dropdownMenu}
            option={cohortArr}
            name="cohort"
            placeHolder="Select Current Cohort"
            handleClick={dropDownHandleChange}
          />

          <RegisterButton
            disabled={isSubmitting}
            handleClick={(e) => {
              handleSubmit(e);
              router.push(`/${values.role.toLowerCase()}`);
            }}
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
    // const res = await fetch(`${url}${uid}`);
    // const data = await res.json();
    // if (data.success === true) {
    //   context.res.writeHead(302, {
    //     Location: `/${data.data[0].role.toLowerCase()}`,
    //   });
    //   context.res.end();
    // }

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
