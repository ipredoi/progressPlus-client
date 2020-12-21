import React from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CoachPortalButton = () => (
  <Button.Group size='large'>
    <Button>Submit feedback</Button>
    <Button.Or />
    <Button>Track bootcamper progress</Button>
  </Button.Group>
);

export default CoachPortalButton;
