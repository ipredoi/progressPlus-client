import React, { useEffect, useRef } from 'react';
import { Grid, Header, Segment, Sidebar, Button } from 'semantic-ui-react';
import '../coach/FeedbackForm/node_modules/semantic-ui-css/semantic.min.css';
import LogOutButton from '../LogOutButton';
import { useAuthContext } from '../../firebaseUtils/useAuthContext';
import styles from './navBar.module.css';

export default function NavBar({ linksAndTitles }) {
  const navBar = useRef();
  const { open, setOpen } = useAuthContext();

  const handleClick = (e) => {
    if (navBar.current.contains(e.target)) {
      // inside navbar click
      return;
    }
    // outside of navbar click
    if (open === true) {
      setOpen(!open);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [open]);

  return (
    <div className={styles.container} ref={navBar}>
      <Sidebar
        as={Segment}
        animation="scale down"
        direction="left"
        visible={open}
        className={styles.nav}>
        <Grid textAlign="center">
          <Grid.Column rows={linksAndTitles.length}>
            {linksAndTitles.map((object) => (
              <Grid.Row key={object.title} href={object.link}>
                <Header className="nav-link">{object.title}</Header>
                <Grid.Column>
                  <Grid.Row></Grid.Row>
                </Grid.Column>
              </Grid.Row>
            ))}
          </Grid.Column>
        </Grid>
        <LogOutButton className={styles.logout} />
      </Sidebar>
    </div>
  );
}
