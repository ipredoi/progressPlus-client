import React, { useState } from 'react';
import AppHeader from '../../components/AppHeader';
import ScoreGraph from '../../components/ScoreGraph';
import FeedbackTable from '../../components/bootcamper/FeedbackTable';
import serverSideProps from '../../libs/functions/serverSideProps';
import styles from './masterytasks.module.css';

export default function MasteryTasks({ session }) {
  const [selectedData, setSelectedData] = useState(1);
  return (
    <>
      <AppHeader session={session} />
      <div className={styles.masteryTasks}>
        <div className={styles.graph}>
          <ScoreGraph
            feedbackData={session.data}
            setSelectedData={setSelectedData}
            taskType='Mastery'
            myName={session.name}
          />
        </div>
        <div className={styles.table}>
          <FeedbackTable selectedData={selectedData} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  async function fetchFeedbackData(url, uid, token) {
    const res = await fetch(`${url}feedback?uid=${uid}&type=mastery`, {
      headers: { authorization: `Bearer ${token}` },
    });
    // mastery task score
    const { data } = await res.json();
    return data;
  }
  return serverSideProps(context, fetchFeedbackData);
}

//function to get the feedback from the backend, may need some refactoring to have consistancy with variable names
