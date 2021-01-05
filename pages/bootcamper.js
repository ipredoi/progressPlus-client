import React, { useState } from 'react';
import Avatar from '../components/Avatar';

import UsefulLinks from '../components/usefulLinks';
import StudentCard from '../components/bootcamper/studentCard';
import NavBar from '../components/NavBar';
import QuoteHeader from '../Components/QuoteHeader';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import serverSideProps from '../libs/functions/serverSideProps';

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
        <QuoteHeader />

        <StudentCard img={session.picture} />
        <footer className="footer">
          <UsefulLinks />
        </footer>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
