//semantic ui used for form skeleton
import { React, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styles from '../styles/componentStyle/feedbackForm.module.css';
import {
  bootcampWeeks,
  tasksArray,
} from '../libs/globalVariables/coachFeedbackFormArr';
import bootCampersArrayReducer from '../libs/functions/bootCampersArrayReducer.js';
import validateFeedbackForm from '../libs/functions/feedbackForm/validateFeedbackForm';
import useFormSubmit from '../libs/customHooks/useFormSubmit';
//----------------------to be moved----------
const valuesInitialState = {
  bootcamperName: '',
  week: '',
  taskType: '',
  subject: '',
  dueDate: '',
  dateSubmitted: '',
  passedTests: '',
  totalTests: '',
  comments: '',
};
//-----------------------------------------------------
const FeedbackForm = ({
  className,
  bootcampersInfoArr,
  submitFeedback,
  coachName,
}) => {
  const router = useRouter();
  console.log(coachName);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    dropDownHandleChange,
    isSubmitted,
  } = useFormSubmit(valuesInitialState, validateFeedbackForm);

  let bootcampersArr = bootCampersArrayReducer(bootcampersInfoArr);
  console.log(bootcampersArr);

  useEffect(() => {
    if (values.bootcamperName !== '') {
      var bootcamperUid = bootcampersInfoArr.filter(function (item) {
        return item.name === `${values.bootcamperName}`;
      });
      const bootuid = bootcamperUid[0].uid;
      console.log(bootuid);
    }
  }, [values.bootcamperName]);

  function feedbackPost() {
    const {
      bootcamperName,
      week,
      taskType,
      subject,
      dueDate,
      dateSubmitted,
      passedTests,
      totalTests,
      comments,
    } = values;
    fetch(`${backendUrl}feedback`, {
      method: 'POST',
      body: JSON.stringify({
        bootcamperuid: `${bootcamperUid}`,
        coachname: `${coachName}`,
        feedbackdate: `${dateTime}`,
        subject: `${subject}`,
        week: week,
        type: `${taskType}`,
        passedtests: passedTests,
        totaltests: totalTests,
        qualitative: `${comments}`,
        duedate: `${dueDate}`,
        datesubmitted: `${dateSubmitted}`,
      }),
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
    }).then((response) => response.json());
    // .then((data) => console.log(data));
    // console.log("handlesubmit working");
  }

  return (
    <Form className={styles.form}>
      <Form.Group>
        <Form.Field
          className={className}
          control={Select}
          options={bootcampersArr}
          label={{
            children: 'Bootcamper Name',
          }}
          placeholder='Bootcamper Name'
          search
          searchInput={{ id: 'form-select-control-name' }}
          name='bootcamperName'
          value={values.bootcamperName}
          onChange={dropDownHandleChange}
          onBlur={handleBlur}
        />

        <Form.Field
          className={styles.dropDownInput}
          control={Select}
          options={bootcampWeeks}
          label={{
            children: 'Week',
          }}
          placeholder='Week'
          search
          searchInput={{ id: 'form-select-control-week' }}
          name='week'
          value={values.week}
          onChange={dropDownHandleChange}
          onBlur={handleBlur}
        />

        <Form.Field
          className={styles.dropDownInput}
          control={Select}
          options={tasksArray}
          label={{
            children: 'Task type',
          }}
          placeholder='Task type'
          search
          searchInput={{ id: 'form-select-control-task-type' }}
          name='taskType'
          value={values.taskType}
          onChange={dropDownHandleChange}
          onBlur={handleBlur}
        />
      </Form.Group>

      <Form.Field>
        <label>Subject</label>
        <input
          placeholder='e.g. React/ JS'
          name='subject'
          value={values.subject}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Field>

      <Form.Field>
        <label>Due Date</label>
        <input
          type='date'
          name='dueDate'
          value={values.dueDate}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label>Date Submitted</label>
        <input
          type='date'
          name='dateSubmitted'
          value={values.dateSubmitted}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Field>

      <Form.Field>
        <label>Passed Tests</label>
        <input
          type='number'
          min='0'
          placeholder='Input the tests passed'
          name='passedTests'
          value={values.passedTests}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label>Total Tests</label>
        <input
          type='number'
          min={values.passedTests}
          placeholder='Input total tests'
          name='totalTests'
          value={values.totalTests}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Field>

      <Form.Field
        id='form-textarea-control-fFeedbackeedback'
        control={TextArea}
        label='Feedback'
        placeholder='Feedback'
        name='comments'
        value={values.comments}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Form.Field
        className={styles.submitButton}
        control={Button}
        content='Submit'
        onClick={submitFeedback}
      />
      <Form.Field
        className={styles.submitButton}
        control={Button}
        content='Main Page'
        onClick={() => {
          router.push('./coach');
        }}
      />
    </Form>
  );
};

export default FeedbackForm;
