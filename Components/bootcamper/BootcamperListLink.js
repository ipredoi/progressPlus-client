import React from 'react';
import { List } from 'semantic-ui-react';

const BootcampterListLink = () => (
  <List link>
    <List.Item active href='/bootcamper'>
      Home
    </List.Item>
    <List.Item as='a' href='/masterytasks'>
      Mastery Tasks
    </List.Item>
    <List.Item as='a' href='/recaptasks'>
      Recap Tasks
    </List.Item>
  </List>
);

export default BootcampterListLink;
