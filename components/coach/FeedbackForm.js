//semantic ui used for form skeleton
import React from "react";
import { useRouter } from "next/router";
import { Form, TextArea, Button, Select } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import styles from "../../styles/componentStyle/feedbackForm.module.css";
import {
  bootcampWeeks,
  tasksArray,
} from "../../libs/globalVariables/coachFeedbackFormArr";
import bootcamperNameReducer from "../../libs/functions/bootcamperNameReducer";

const FeedbackForm = ({
  bootcamperName,
  className,
  taskType,
  subject,
  week,
  passedTests,
  totalTests,
  comments,
  dueDate,
  dateSubmitted,
  bootcampersInfoArr,
  submitFeedback,
  setbootcamperName,
  setTaskType,
  setSubject,
  setWeek,
  setPassedTests,
  setTotalTests,
  setComments,
  setDueDate,
  setDateSubmitted,
}) => {
  const router = useRouter();

  //applying reducer to the bootcampesNames array to obtain the input field array needed
  let bootcampersArr = bootcampersInfoArr.reduce(bootcamperNameReducer, []);

  return (
    <Form className={styles.form}>
      <Form.Group>
        <Form.Field
          className={className}
          control={Select}
          options={bootcampersArr}
          label={{
            children: "Bootcamper Name",
            htmlFor: "form-select-control-name",
          }}
          placeholder='Name'
          search
          searchInput={{ id: "form-select-control-name" }}
          onChange={setbootcamperName}
          value={bootcamperName}
        />
        <Form.Field
          className={styles.dropDownInput}
          control={Select}
          options={bootcampWeeks}
          label={{
            children: "Week",
            htmlFor: "form-select-control-week",
          }}
          placeholder='Week'
          search
          searchInput={{ id: "form-select-control-week" }}
          onChange={setWeek}
          value={week}
        />
        <Form.Field
          className={styles.dropDownInput}
          control={Select}
          options={tasksArray}
          label={{
            children: "Task type",
            htmlFor: "form-select-control-task-type",
          }}
          placeholder='Task type'
          search
          searchInput={{ id: "form-select-control-task-type" }}
          onChange={setTaskType}
          value={taskType}
        />
      </Form.Group>
      {/* <Form> */}
      <Form.Field>
        <label>Subject</label>
        <input placeholder='React/ JS' onChange={setSubject} value={subject} />
      </Form.Field>
      {/* </Form> */}
      {/* <Form> */}
      <Form.Field>
        <label>Due Date</label>
        <input
          className={styles.dateInput}
          onChange={setDueDate}
          type='date'
          value={dueDate}
        />
        <label>Date Submitted</label>
        <input
          className={styles.dateInput}
          onChange={setDateSubmitted}
          type='date'
          value={dateSubmitted}
        />
      </Form.Field>
      {/* </Form> */}

      {/* <Form> */}
      <Form.Field>
        <label>Passed Tests</label>
        <input
          onChange={setPassedTests}
          type='number'
          min='0'
          placeholder='Input the score'
          value={passedTests}
        />
        <label>Total Tests</label>
        <input
          onChange={setTotalTests}
          type='number'
          min={passedTests}
          placeholder='Input total score'
          value={totalTests}
        />
      </Form.Field>
      {/* </Form> */}

      <Form.Field
        onChange={setComments}
        id='form-textarea-control-fFeedbackeedback'
        control={TextArea}
        label='Feedback'
        placeholder='Feedback'
        value={comments}
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
          router.push("./coach");
        }}
      />
    </Form>
  );
};

export default FeedbackForm;
