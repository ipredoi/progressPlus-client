//from semantic unicodeBidi
//cards to fill the page
//personal profile
//name and pic should be uploaded from database(firebase)
//i manually inserted data for show
import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function StudentCard({ session }) {
  return (
    <Card>
      <Image src={session.picture} alt='Profile Picture' />
      <Card.Content>
        <Card.Header>{session.name}</Card.Header>
        <br />
        <Card.Meta>Cohort 4</Card.Meta>
      </Card.Content>
    </Card>
  );
}
