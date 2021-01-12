import useFormSubmit from '../../libs/customHooks/useFormSubmit';

// initial values object -> all the values have the initial state of ""
// the state will be changed when the form will be updated
const valuesInitialState = { role: '', corort: '', forename: '', surname: '' };

export default function RegisterForm() {
  // destructuring data coming from the useFormSubmit custom hook
  // the hook takes in the valuesInitialState object, validateFeedback form function which checks if there are any errors in the form and the feedbackPost function to submit data to database
  const {
    handleChange,
    handleSubmit,
    dropDownHandleChange,
    isSubmitting,
    values,
    errors,
  } = useFormSubmit(valuesInitialState, validateRegisterForm, registerPost);
  const { logOut } = useAuthContext();
  //we are using router to redirect the user after register to the coach/bootcamper page
  const router = useRouter();
}
