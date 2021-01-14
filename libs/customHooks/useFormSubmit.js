import { useState, useEffect } from 'react';

// creating a submit form hook which takes in an initial state object,a validate for errors function, and a function to create a post request
let useFormSubmit = (initialState, validate, postRequest, token) => {
  // creating a state for setting the valuse and get the initial state from the initialState object
  const [values, setValues] = useState(initialState);
  //console.log(values);
  // creating a state for errors and set the initial value to an empty object
  const [errors, setErrors] = useState({});

  // creating a state for attempting to submit the form and set the initial value to false .. this will be changed when the submit button is pressed
  const [isSubmitting, setIsSubmitting] = useState(false);

  // after the submit button is pressed,check if there is no error (all required fields are filled)and if no error then execute the post request function, emptu the fields and set the state for submiting to false
  //if there are errors , then set the state for submitting to false
  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      //  console.log(errors);
      if (noErrors) {
        postRequest(values, token);
        setValues(initialState);
        setIsSubmitting(false);
      }
      setIsSubmitting(false);
    }
  }, [errors]);

  // each property of the initial object will be updated using this function --> changing the state of each property
  function handleChange(e) {
    setValues({
      ...values,
      // using [] for dinamicaly change the property
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  }

  // this function is similar with handleChange, but is used for semantic-ui dropdown menus
  function dropDownHandleChange(e, data) {
    setValues({
      ...values,
      // using [] for dinamicaly change the property
      [data.name]: data.value,
    });
    //   console.log(data.value);
  }

  // this function is used to attempt and to submit the form
  //firstly chcek if there is any error using the validateFeedbackForm function
  //setting the isSubmitting to true so the postRequest function can be executed ig there are no errors
  function handleSubmit(event) {
    event.preventDefault();
    const formValidationErrors = validate(values);
    setErrors(formValidationErrors);
    setIsSubmitting(true);
  }

  // returning the functions, the values, the errors, and the submitting state(used on submit button)
  return {
    handleSubmit,
    handleChange,
    dropDownHandleChange,
    values,
    errors,
    isSubmitting,
  };
};

//exporting the hook
export default useFormSubmit;
