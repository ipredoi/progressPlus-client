import React from 'react';
import styles from '../styles/coach.module.css';
import NavBar from '../components/NavBar';
import { coachNavBarArr } from '../libs/globalvariables/navBarArrays';
import Avatar from '../components/avatar';
import CoachButton from '../components/coach/CoachButton';
import UsefulLinks from '../components/usefulLinks';
import QuoteHeader from '../Components/QuoteHeader';
import serverSideProps from '../libs/functions/serverSideProps';
import LoadingImg from '../components/LoadingImg';

export default function Coach({ session }) {
  if (!session) {
    return <LoadingImg />;
  }
  return (
    <div>
      <header className='header'>
        <Avatar src={session.picture} name={session.name} />

        <NavBar linksAndTitles={coachNavBarArr} />
      </header>
      <QuoteHeader />
      <CoachButton />
      <footer className={styles.coachButton}>
        <UsefulLinks />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
