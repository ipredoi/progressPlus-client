import React, { useState } from 'react';
import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import StudentCard from '../components/bootcamper/StudentCard';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import NavBar from '../components/NavBar';

export default function Bootcamper({ session }) {
  if (!session) {
    return (
      <div>
        <img className="loadingImg" src="/source.gif" alt="loadingImg" />
      </div>
    );
  } else {
    return (
      <div>
        <header className="header">
          <Avatar src={session.picture} name={session.name} />
          <NavBar linksAndTitles={bootcamperNavBarArr} />
        </header>
        <h1 className="h1">
          "Ruby is rubbish! PHP is phpantastic!" – Nikita Popov
        </h1>
        <StudentCard img={session.picture} />
        <footer className="footer">
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
