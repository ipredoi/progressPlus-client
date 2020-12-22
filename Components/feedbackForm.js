//semantic ui used for form skeleton
import React from 'react';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

//arrays for dropdown lists

const bootcamperArray = [
  { key: 'p', text: 'Patrick', value: 'Patrick' },
  { key: 'f', text: 'Freshta', value: 'Freshta' },
  { key: 'i', text: 'Ionut', value: 'Ionut' },
];

const weeksArray = [
  { key: '1', text: '1', value: '1' },
  { key: '2', text: '2', value: '2' },
  { key: '3', text: '3', value: '3' },
  { key: '4', text: '4', value: '4' },
  { key: '5', text: '5', value: '5' },
  { key: '6', text: '6', value: '6' },
  { key: '7', text: '7', value: '7' },
  { key: '8', text: '8', value: '8' },
  { key: '9', text: '9', value: '9' },
  { key: '10', text: '10', value: '10' },
  { key: '11', text: '11', value: '11' },
  { key: '12', text: '12', value: '12' },
  { key: '13', text: '13', value: '13' },
  { key: '14', text: '14', value: '14' },
  { key: '15', text: '15', value: '15' },
  { key: '16', text: '16', value: '16' },
];

// const coachArray = [
//   { key: 'c', text: 'Chris', value: 'Chris' },
//   { key: 'm', text: 'Mell', value: 'Mell' },
//   { key: 'l', text: 'Liz', value: 'Liz' },
// ];

const FeedbackForm = () => (
  <Form className='form'>
    <Form.Group widths='equal'>
      {/* <Form.Field
        control={Select}
        options={coachArray}
        label={{
          children: 'Coach Name',
          htmlFor: 'form-select-control-name',
        }}
        placeholder='Name'
        search
        searchInput={{ id: 'form-select-control-name' }}
      /> */}
      <Form.Field
        control={Select}
        options={bootcamperArray}
        label={{
          children: 'Bootcamper Name',
          htmlFor: 'form-select-control-name',
        }}
        placeholder='Name'
        search
        searchInput={{ id: 'form-select-control-name' }}
      />
      <Form.Field
        control={Select}
        options={weeksArray}
        label={{
          children: 'Week',
          htmlFor: 'form-select-control-week',
        }}
        placeholder='Week'
        search
        searchInput={{ id: 'form-select-control-week' }}
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-fFeedbackeedback'
      control={TextArea}
      label='Feedback'
      placeholder='Feedback'
    />
    <Form>
      <Form.Field>
        <label>Grade</label>
        <input placeholder='1 - 5' />
      </Form.Field>
    </Form>
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Submit'
      //   label=''
    />
    <Form.Field
      href='http://localhost:3000/coach'
      id='form-button-control-public'
      control={Button}
      content='⏎'
      //   label=''
    />
  </Form>
);

export default FeedbackForm;
