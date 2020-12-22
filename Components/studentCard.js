//from semantic unicodeBidi
//cards to fill the page
//personal profile
//name and pic should be uploaded from database(firebase)
//i manually inserted data for show
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const StudentCard = () => (
  <Card>
    <Image
      src='https://ca.slack-edge.com/T6L933W4X-U01AAKNKAU9-2f9d3108ad84-512'
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>Patrick</Card.Header>
      &nbsp;
      <Card.Meta>Cohort 4</Card.Meta>
    </Card.Content>
  </Card>
);

export default StudentCard;
