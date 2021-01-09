import React from 'react';
import styles from './coach.module.css';
import QuoteHeader from '../../components/QuoteHeader';
import serverSideProps from '../../libs/functions/serverSideProps';
import LoadingImg from '../../components/LoadingImg';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import { coachNavBarArr } from '../../libs/globalVariables/navBarArrays';
import CoachDashboard from '../../components/coach/CoachDashboard';

export default function Coach({ session }) {
  if (!session) {
    return <LoadingImg />;
  }
  return (
    <div className={styles.coach}>
      <AppHeader
        session={session}
        navBarArr={coachNavBarArr}
        title={'WELCOME TO APP NAME'}
      />
      <section className={styles.body}>
        <div className={styles.quoteHeader}>
          <QuoteHeader />
        </div>
        <h2 className={styles.welcome}>Welcome back, {session.name}</h2>
        <CoachDashboard />
      </section>
      <AppFooter />
    </div>
  );
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
