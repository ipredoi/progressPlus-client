import React, { useState } from 'react';
import styles from '../styles/coach.module.css';
import NavBar from '../components/NavBar';
import { coachNavBarArr } from '../libs/globalVariables/navBarArrays';
import Avatar from '../components/Avatar';
import CoachButton from '../components/coach/CoachButton';
import UsefulLinks from '../components/UsefulLinks';
import LogOutButton from '../components/LogOutButton';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';

export default function Coach({ session }) {
  if (!session) {
    return null;
  } else {
    const [visible, setVisible] = useState(false);
    const [animation, setAnimation] = useState('scale down');
    const [direction, setDirection] = useState('top');

    return (
      <div>
        <header className='header'>
          <LogOutButton />
          <Avatar
            src={session.picture}
            name={session.name}
            visible={visible}
            setVisible={setVisible}
          />

          <NavBar
            visible={visible}
            animation={animation}
            direction={direction}
            linksAndTitles={coachNavBarArr}
          />
        </header>
        <h1 className='h1'>
          "Ruby is rubbish! PHP is phpantastic!" – Nikita Popov
        </h1>
        <CoachButton />
        <footer className={styles.coachButton}>
          <UsefulLinks />
        </footer>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    console.log(token);
    const { uid, email, name, picture } = token;

    return {
      props: { session: { name, uid, email, picture } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return { props: {} };
  }
}
