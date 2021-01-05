//semantic ui used for form skeleton
import React from 'react';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import {
  bootcampWeeks,
  tasksArray,
} from '../libs/globalVariables/coachFeedbackFormArr';

const FeedbackForm = ({
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
  //return all bootcamper names in an array
  let bootcampersNames = bootcampersInfoArr.map((bootcamper) => {
    return bootcamper.name;
  });

  // creating a reduce function to match the array required by the input field eg [{key:"i", name:"Ionut", value:"Ionut"}]
  const bootcamperNameReducer = (acc, cur) => {
    return [
      ...acc,
      {
        key: cur.charAt(0).toLowerCase(),
        text: cur,
        value: cur,
      },
    ];
  };

  //aplying reducer to the bootcampesNames array to obtain the input field array needed
  let bootcampersArr = bootcampersNames.reduce(bootcamperNameReducer, []);

  return (
    <Form className='form'>
      <Form.Group widths='equal'>
        <Form.Field
          control={Select}
          options={bootcampersArr}
          label={{
            children: 'Bootcamper Name',
            htmlFor: 'form-select-control-name',
          }}
          placeholder='Name'
          search
          searchInput={{ id: 'form-select-control-name' }}
          onChange={setbootcamperName}
        />
        <Form.Field
          control={Select}
          options={bootcampWeeks}
          label={{
            children: 'Week',
            htmlFor: 'form-select-control-week',
          }}
          placeholder='Week'
          search
          searchInput={{ id: 'form-select-control-week' }}
          onChange={setWeek}
        />
        <Form.Field
          control={Select}
          options={tasksArray}
          label={{
            children: 'Task type',
            htmlFor: 'form-select-control-task-type',
          }}
          placeholder='Task type'
          search
          searchInput={{ id: 'form-select-control-task-type' }}
          onChange={setTaskType}
        />
      </Form.Group>
      <Form>
        <Form.Field>
          <label>Subject</label>
          <input placeholder='React/ JS' onChange={setSubject} />
        </Form.Field>
      </Form>
      <Form>
        <Form.Field>
          <label>Due Date</label>
          <input onChange={setDueDate} type='date' />
          <label>Date Submitted</label>
          <input onChange={setDateSubmitted} type='date' />
        </Form.Field>
      </Form>

      <Form>
        <Form.Field>
          <label>Passed Tests</label>
          <input
            onChange={setPassedTests}
            type='number'
            placeholder='Input the score'
          />
          <label>Total Tests</label>
          <input
            onChange={setTotalTests}
            type='number'
            placeholder='Input total score'
          />
        </Form.Field>
      </Form>

      <Form.Field
        onChange={setComments}
        id='form-textarea-control-fFeedbackeedback'
        control={TextArea}
        label='Feedback'
        placeholder='Feedback'
      />

      <Form.Field
        id='form-button-control-public'
        control={Button}
        content='Submit'
        onClick={submitFeedback}
      />
      <Form.Field
        href='http://localhost:3000/coach'
        id='form-button-control-public'
        control={Button}
        content='⏎'
      />
    </Form>
  );
};

export default FeedbackForm;
