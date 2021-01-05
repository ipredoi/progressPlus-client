import React, { useState } from 'react';
import Avatar from '../components/Avatar';
import UsefulLinks from '../components/usefulLinks';
import NavBar from '../components/NavBar';
import QuoteHeader from '../Components/QuoteHeader';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import serverSideProps from '../libs/functions/serverSideProps';
import LoadingImg from '../components/LoadingImg';

export default function Bootcamper({ session }) {
  if (!session) {
    return <LoadingImg />;
  }
  return (
    <div>
      <header className='header'>
        <Avatar src={session.picture} name={session.name} />
        <NavBar linksAndTitles={bootcamperNavBarArr} />
      </header>
      <QuoteHeader />
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
