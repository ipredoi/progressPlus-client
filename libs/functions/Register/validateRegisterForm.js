export default function validateFeedbackForm(values) {
  let errors = {};

  if (values.role === '') {
    errors.role = 'Required Role';
  }
  if (values.role === 'Bootcamper' && values.cohort === 0) {
    errors.cohort = 'Required Cohort';
  }
  if (values.surname === '') {
    errors.surname = 'Required Surname';
  }
  if (values.forename === '') {
    errors.forename = 'Required Forename';
  }
  if (values.uid === '') {
    errors.uid = `Sorry, we couldn't find the user id. Please try again`;
  }
  return errors;
}
