export default function validateFeedbackForm(values) {
  let errors = {};

  if (!values.bootcamperName) {
    errors.bootcamperName = 'Required Bootcamper Name';
  }
  if (!values.week) {
    errors.week = 'Required Week';
  }
  if (!values.taskType) {
    errors.taskType = 'Required Task Type';
  }
  if (!values.subject) {
    errors.subject = 'Required Subject';
  }
  if (!values.passedTests) {
    errors.passedTests = 'Required Passed Tests';
  }
  if (!values.totalTests) {
    errors.totalTests = 'Required Total Tests';
  }
  if (!values.dueDate) {
    errors.dueDate = 'Required Due Date';
  }
  if (!values.dateSubmitted) {
    errors.dateSubmitted = 'Required Date Submitted';
  }
  if (!values.comments) {
    errors.comments = 'Required Comments';
  }

  return errors;
}
