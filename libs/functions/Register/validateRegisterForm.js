export default function validateFeedbackForm(values) {
  let errors = {};

  if (values.bootcamperName === '') {
    errors.bootcamperName = 'Required Bootcamper Name';
  }
  if (values.role === '') {
    errors.role = 'Required Role';
  }
  if (values.cohort === '') {
    errors.cohort = 'Required Cohort';
  }
  if (values.surname === '') {
    errors.surname = 'Required Surname';
  }
  if (values.forename === '') {
    errors.forename = 'Required Forename';
  }
  return errors;
}
