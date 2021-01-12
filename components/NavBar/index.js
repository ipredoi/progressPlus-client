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
        {/* <Menu.item>
          {linksAndTitles.map((object) => (
            <Menu.item key={object.title} href={object.link}>
              <Header>{object.title}</Header>
            </Menu.item>
          ))}
        </Menu.item> */}

        <Grid textAlign='center'>
          {/* <Grid.Column Columns={1}>
            <Grid.Row></Grid.Row>
          </Grid.Column> */}
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

{
  /* <Button
            onClick={() => {
              setOpen(!open);
            }}></Button> */
}
// {
//   <Grid textAlign='center'>
//           <Grid.Column Columns={1}>
//             <Grid.Row></Grid.Row>
//           </Grid.Column>
//           <Grid.Column Rows={linksAndTitles.length + 1}>
//             {linksAndTitles.map((object) => (
//               <Grid.Row key={object.title} href={object.link}>
//                 <Header>{object.title}</Header>
//               </Grid.Row>
//             ))}
//             <Grid.Row>
//               put in edit profile component or redirect to edit profile page
// }
{
  /* <LogOutButton />
            </Grid.Row>
          </Grid.Column>
        </Grid>  */
}
