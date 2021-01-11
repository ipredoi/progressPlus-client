import React from 'react';
import QuoteHeader from '../../components/QuoteHeader';
import serverSideProps from '../../libs/functions/serverSideProps';
import styles from './bootcamper.module.css';
import DashboardDisplay from '../../components/bootcamper/DashboardDisplay';
import AppHeader from '../../components/AppHeader';

export default function Bootcamper({ session }) {
<<<<<<< HEAD
  if (!session) {
    return <LoadingImg />;
  } else {
    return (
      <div className={styles.bootcamper}>
        <AppHeader session={session} />
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
=======
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
    </div>
  );
>>>>>>> 55959991d684ebdcebd3844bf08a545a11830bb6
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
