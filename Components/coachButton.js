//all code from sematic ui
//used hrefs to link buttons to actual pages
import React from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CoachButton = () => (
  <Button.Group className='coachButton' size='large'>
    <Button href='http://localhost:3000/feedback'>Submit Feedback</Button>
    <Button.Or />
    <Button>Track Progress</Button>
  </Button.Group>
);

export default CoachButton;
