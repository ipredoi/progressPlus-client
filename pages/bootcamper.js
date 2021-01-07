import React from 'react';
import QuoteHeader from '../components/QuoteHeader';
import serverSideProps from '../libs/functions/serverSideProps';
import styles from '../styles/pagesStyle/bootcamper.module.css';
import LoadingImg from '../components/LoadingImg';
import DashboardDisplay from '../components/bootcamper/DashboardDisplay';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

export default function Bootcamper({ session }) {
  if (!session) {
    return <LoadingImg />;
  } else {
    return (
      <div className={styles.bootcamper}>
        <AppHeader session={session} title={'SoC Progress Tracker'} />
        <section className={styles.body}>
          <div className={styles.quoteHeader}>
            <QuoteHeader />
          </div>
          <h2 className={styles.welcome}>Welcome back, {session.name}</h2>
          <DashboardDisplay />
        </section>
        <AppFooter />
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
