import { useState, useEffect } from 'react';

// creating a submit form hook which takes in an initial state object and a validate function
let useFormSubmit = (initialState, validate, postRequest) => {
  // creating a state for setting the valuse and get the initial state from the initialState object
  const [values, setValues] = useState(initialState);
  console.log(values);
  // creating a state for errors and set the initial value to an empty object
  const [errors, setErrors] = useState({});

  // creating a state for attempting to submit the form and set the initial value to false
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const noErrors = Object.keys(errors).length === 0;
      console.log(errors);
      if (noErrors) {
        console.log('form submited', values.bootcamperName);
        setIsSubmitted(false);
      }
      setIsSubmitted(false);
    }
  }, [errors]);

  function handleBlur() {
    const formValidationErrors = validate(values);
    console.log(formValidationErrors);
    setErrors(formValidationErrors);
  }

  // each property of the initial object will be updated using this function --> changing the state of each property
  function handleChange(e) {
    setValues({
      ...values,
      // using [] for dinamicaly change the property
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }

  // this function changes the propertyes from the initialProperty object for the dropdown menus
  function dropDownHandleChange(e, data) {
    setValues({
      ...values,
      // using [] for dinamicaly change the property
      [data.name]: data.value,
    });
    console.log(data.value);
  }

  // this function is used to submit the form
  function handleSubmit(event) {
    event.preventDefault();
    const formValidationErrors = validate(values);
    setErrors(formValidationErrors);
    sumbitForm(values);
    console.log('nice', values);
    setIsSubmitted(true);
    setValues(initialState);
    console.log(initialState);
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    dropDownHandleChange,
    isSubmitted,
  };
};

export default useFormSubmit;
