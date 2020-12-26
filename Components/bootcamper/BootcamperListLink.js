import React from 'react';
import { List } from 'semantic-ui-react';

const BootcampterListLink = () => (
  <List link>
    <List.Item active href='http://localhost:3000/bootcamper'>
      Home
    </List.Item>
    <List.Item as='a' href='http://localhost:3000/masteryTasks'>
      Mastery Tasks
    </List.Item>
    <List.Item as='a' href='http://localhost:3000/recapTasks'>
      Recap Tasks
    </List.Item>
  </List>
);

export default BootcampterListLink;
