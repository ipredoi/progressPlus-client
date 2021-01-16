import React, { useState } from 'react';
import AppHeader from '../../components/AppHeader';
import serverSideProps from '../../libs/functions/serverSideProps';
import ScoreGraph from '../../components/ScoreGraph';
import FeedbackTable from '../../components/bootcamper/FeedbackTable';
import styles from './recaptasks.module.css';

export default function RecapTasks({ session }) {
  const [selectedData, setSelectedData] = useState(1);
  return (
    <div>
      <AppHeader session={session} />
      <div className={styles.container}>
        <h1 className={styles.title}>{session.name}'s Recap Task Score</h1>
        <div className={styles.graph}>
          <ScoreGraph
            feedbackData={session.data}
            setSelectedData={setSelectedData}
            taskType="Recap"
            myName={session.name}
          />
        </div>
        <div className={styles.table}>
          <FeedbackTable selectedData={selectedData} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  async function fetchFeedbackData(url, uid, token) {
    const res = await fetch(`${url}feedback?uid=${uid}&type=recap`, {
      headers: { authorization: `Bearer ${token}` },
    }); // recap task score
    const { data } = await res.json();
    return data;
  }
  return serverSideProps(context, fetchFeedbackData);
}

//function to get the feedback from the backend, may need some refactoring to have consistancy with variable names
