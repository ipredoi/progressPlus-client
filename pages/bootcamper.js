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
import DashboardDisplay from '../Components/bootcamper/DashboardDisplay';

export default function Bootcamper({ session }) {
  if (!session) {
    return <LoadingImg />;
  } else {
    return (
      <div className={styles.bootcamper}>
        <section className={styles.header}>
          <div className={styles.avatar}>
            <Avatar src={session.picture} name={session.name} />
          </div>
          <NavBar linksAndTitles={bootcamperNavBarArr} />
          <div className={styles.quoteHeader}>
            <QuoteHeader />
          </div>
          <h2 className={styles.welcome}>Welcome back, {session.name}</h2>
        </section>
        <section className={styles.body}>
          <DashboardDisplay />
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
