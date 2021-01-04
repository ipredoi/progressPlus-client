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

const weeksArray = [];
for (let i = 1; i < 17; i++) {
  weeksArray.push({ key: `${i}`, text: `${i}`, value: `${i}` });
}

// const coachArray = [
//   { key: 'c', text: 'Chris', value: 'Chris' },
//   { key: 'm', text: 'Mell', value: 'Mell' },
//   { key: 'l', text: 'Liz', value: 'Liz' },
// ];

const FeedbackForm = () => (
  <Form className="form">
    <Form.Group widths="equal">
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
        placeholder="Name"
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
        placeholder="Week"
        search
        searchInput={{ id: 'form-select-control-week' }}
      />
    </Form.Group>
    <Form.Field
      id="form-textarea-control-fFeedbackeedback"
      control={TextArea}
      label="Feedback"
      placeholder="Feedback"
    />
    <Form>
      <Form.Field>
        <label>Grade</label>
        <input placeholder="1 - 5" />
      </Form.Field>
    </Form>
    <Form.Field
      id="form-button-control-public"
      control={Button}
      content="Submit"
      //   label=''
    />
    <Form.Field
      href="http://localhost:3000/coach"
      id="form-button-control-public"
      control={Button}
      content="⏎"
      //   label=''
    />
  </Form>
);

export default FeedbackForm;
