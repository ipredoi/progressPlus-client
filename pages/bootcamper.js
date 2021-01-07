import React from 'react';
import QuoteHeader from '../Components/QuoteHeader';
import serverSideProps from '../libs/functions/serverSideProps';
import styles from '../styles/pagesStyle/bootcamper.module.css';
import LoadingImg from '../components/LoadingImg';
import DashboardDisplay from '../Components/bootcamper/DashboardDisplay';
import AppHeader from '../Components/AppHeader';
import AppFooter from '../Components/AppFooter';

export default function Bootcamper({ session }) {
  if (!session) {
    return <LoadingImg />;
  } else {
    return (
      <div className={styles.bootcamper}>
        <AppHeader session={session} title={'WELCOME TO APP NAME'} />
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
