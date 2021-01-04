//all code from sematic ui
//used hrefs to link buttons to actual pages
import React from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { url } from '../../libs/globalVariables/frontendUrl';

const CoachButton = ({ className }) => { 
  console.log(url)
  return( <Button.Group className={className} size='large'>
  <Button href={`feedback`}>Submit Feedback</Button>
  <Button.Or />
  <Button href={`progress`}>Track Progress</Button>
</Button.Group>)
 
};
export default CoachButton;
