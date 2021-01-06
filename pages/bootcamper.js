import React, { useState } from 'react';
import Avatar from '../components/Avatar';
import UsefulLinks from '../components/usefulLinks';
import NavBar from '../components/NavBar';
import QuoteHeader from '../Components/QuoteHeader';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import serverSideProps from '../libs/functions/serverSideProps';
import styles from '../styles/pagesStyle/bootcamper.module.css';
import { Icon } from 'semantic-ui-react';
import LoadingImg from '../components/LoadingImg';

export default function Bootcamper({ session }) {
  if (!session) {
    return <LoadingImg />;
  } else {
    return (
      <div className={styles.bootcamper}>
        <header className={styles.header}>
          <Avatar src={session.picture} name={session.name} />
          <NavBar linksAndTitles={bootcamperNavBarArr} />
          <div className={styles.quoteHeader}>
            <QuoteHeader />
          </div>
          <h2 className={styles.welcome}>Welcome back, {session.name}</h2>
        </header>
        <section className={styles.body}>
          <Icon name='chart line' size='massive' />
          <Icon name='chart bar' size='massive' />
        </section>
        <footer className={styles.footer}>
          <UsefulLinks />
        </footer>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
