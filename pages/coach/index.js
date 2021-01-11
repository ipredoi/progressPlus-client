import React from 'react';
import styles from './coach.module.css';
import QuoteHeader from '../../components/QuoteHeader';
import serverSideProps from '../../libs/functions/serverSideProps';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import { coachNavBarArr } from '../../libs/globalVariables/navBarArrays';
import CoachDashboard from '../../components/coach/CoachDashboard';

export default function Coach({ session }) {
  return (
    <div className={styles.coach}>
      <AppHeader
        session={session}
        navBarArr={coachNavBarArr}
        title={'SoC Progress Tracker'}
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
