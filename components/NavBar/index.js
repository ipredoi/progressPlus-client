import React from 'react';
import { Grid, Header, Segment, Sidebar, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import LogOutButton from '../LogOutButton';
import { useAuthContext } from '../../firebaseUtils/useAuthContext';

export default function NavBar({ linksAndTitles }) {
  const { open, setOpen } = useAuthContext();
  return (
    <div>
      <Sidebar
        as={Segment}
        animation='scale down'
        direction='left'
        visible={open}>
        <Grid textAlign='center'>
          <Grid.Column Rows={linksAndTitles.length + 1}>
            {linksAndTitles.map((object) => (
              <Grid.Row key={object.title} href={object.link}>
                <Header>{object.title}</Header>
                <Grid.Column Columns={1}>
                  <Grid.Row></Grid.Row>
                </Grid.Column>
              </Grid.Row>
            ))}
            <Grid.Row>
              <LogOutButton />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Sidebar>
    </div>
  );
}
