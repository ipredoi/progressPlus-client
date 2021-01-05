import React, { useState } from 'react';
import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import StudentCard from '../components/bootcamper/StudentCard';
import LogOutButton from '../components/LogOutButton';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import NavBar from '../components/NavBar';

export default function Bootcamper({ session }) {
  if (!session) {
    return (
      <div>
        <img className='loadingImg' src='/source.gif' alt='loadingImg' />
      </div>
    );
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
            linksAndTitles={bootcamperNavBarArr}
            setVisible={setVisible}
          />
        </header>
        <h1 className='h1'>
          "Ruby is rubbish! PHP is phpantastic!" – Nikita Popov
        </h1>
        <StudentCard img={session.picture} />
        <footer className='footer'>
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
    console.log(name);

    return {
      props: { session: { name, uid, email, picture } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return { props: {} };
  }
}
