import React from 'react';
import QuoteHeader from '../../components/QuoteHeader';
import serverSideProps from '../../libs/functions/serverSideProps';
import styles from './bootcamper.module.css';
import BootcamperDashboard from '../../components/bootcamper/BootcamperDashboard';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';

export default function Bootcamper({ session }) {
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
          <BootcamperDashboard />
        </section>
        <AppFooter />
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
