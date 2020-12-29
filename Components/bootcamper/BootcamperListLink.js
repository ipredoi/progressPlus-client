import React from 'react';
import { List } from 'semantic-ui-react';

const BootcampterListLink = () => (
  <List link>
    <List.Item active href='/bootcamper'>
      Home
    </List.Item>
    <List.Item as='a' href='/masteryTasks'>
      Mastery Tasks
    </List.Item>
    <List.Item as='a' href='/recapTasks'>
      Recap Tasks
    </List.Item>
  </List>
);

export default BootcampterListLink;
