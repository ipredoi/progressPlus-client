import React from 'react';
import QuoteHeader from '../../components/QuoteHeader';
import serverSideProps from '../../libs/functions/serverSideProps';
import bootcamperStyles from './bootcamper.module.css';
import quoteStyles from '../../components/QuoteHeader/quote.module.css';
import BootcamperDashboard from '../../components/bootcamper/BootcamperDashboard';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';

export default function Bootcamper({ session }) {
  if (!session) {
    return <LoadingImg />;
  } else {
    return (
      <div className={bootcamperStyles.bootcamper}>
        <AppHeader session={session} />
        <section className={bootcamperStyles.body}>
          <h2 className={bootcamperStyles.welcome}>
            Welcome back, {session.name}
          </h2>
          <BootcamperDashboard />
          <div className={quoteStyles.quoteHeaderContainer}>
            <QuoteHeader className={quoteStyles.quoteHeader} />
          </div>
        </section>
        <AppFooter />
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
