import React, { useEffect } from 'react';
import styles from './coach.module.css';
import QuoteHeader from '../../components/QuoteHeader';
import serverSideProps from '../../libs/functions/serverSideProps';
import AppHeader from '../../components/AppHeader';
import { coachNavBarArr } from '../../libs/globalVariables/navBarArrays';
import CoachDashboard from '../../components/coach/CoachDashboard';
import { useAuthContext } from '../../firebaseAuthUtils/useAuthContext';

export default function Coach({ session }) {
  const { router } = useAuthContext();
  if (session.role !== 'Coach') {
    router.push('/');
  }
  return (
    <div className={styles.coach}>
      <AppHeader session={session} navBarArr={coachNavBarArr} />
      <section className={styles.body}>
        <div className={styles.quoteHeader}>
          <QuoteHeader />
        </div>
        <h2 className={styles.welcome}>Welcome back, {session.name}</h2>
        <CoachDashboard />
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
