import React from 'react';
import { List } from 'semantic-ui-react';

const CoachListLink = () => (
  <List link>
    <List.Item active href='http://localhost:3000/coach'>
      Home
    </List.Item>
    <List.Item as='a' href='http://localhost:3000/feedback'>
      Submit Feedback
    </List.Item>
    <List.Item as='a' href='http://localhost:3000/progress'>
      Track Progress
    </List.Item>
  </List>
);

export default CoachListLink;
