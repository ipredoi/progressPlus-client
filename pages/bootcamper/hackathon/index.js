import React, { useState } from 'react';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import serverSideProps from '../../../libs/functions/serverSideProps';
import LoadingImg from '../../../components/LoadingImg';
import HackathonQuiz from '../../../Components/bootcamper/HackathonQuiz';
import styles from './hackathon.module.css';

export default function Hackathon({ session }) {
  return (
    <div>
      <AppHeader session={session} title={'Hackathon review'} />
      <div className={styles.questions}>
        <HackathonQuiz />
      </div>
      <AppFooter />
    </div>
  );
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
