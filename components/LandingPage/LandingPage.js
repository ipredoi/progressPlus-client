import React from 'react';
import styles from './LandingPage.module.css';
import QuoteHeader from '../QuoteHeader';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import { useAuthContext } from '../../firebaseUtils/useAuthContext';

export default function LandingPage({ session, navBarArray, Dashboard }) {
  const { open, setOpen } = useAuthContext();
  return (
    <div className={styles.container}>
      <AppHeader session={session} navBarArr={navBarArray} />
      <section
        className={styles.body}
        onClick={() => {
          setOpen(false);
        }}>
        <div className={styles.quoteHeader}></div>
        <h2 className={styles.welcome}>Welcome {session.name}</h2>
        <Dashboard />
        <QuoteHeader />
      </section>
      <AppFooter />
    </div>
  );
}
