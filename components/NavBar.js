import React, { useState } from 'react';
import { Grid, Header, Segment, Sidebar } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import NavBarDropdown from './NavBarDropdown';
import NavBarAvatar from '../components/NavBarAvatar';

export default function NavBar({
  visible,
  direction,
  animation,
  linksAndTitles,
}) {
  return (
    <div>
      <Sidebar
        as={Segment}
        animation={animation}
        direction={direction}
        visible={visible}>
        <Grid textAlign='center'>
          <Grid.Row columns={1}>
            <Grid.Column></Grid.Column>
          </Grid.Row>
          <Grid.Row columns={linksAndTitles.length}>
            {linksAndTitles.map((object) => (
              <Grid.Column active href={object.link}>
                <Header>{object.title}</Header>
              </Grid.Column>
            ))}
          </Grid.Row>
          {/* <NavBarAvatar /> */}
          {/* <NavBarDropdown /> */}
        </Grid>
      </Sidebar>
    </div>
  );
}
