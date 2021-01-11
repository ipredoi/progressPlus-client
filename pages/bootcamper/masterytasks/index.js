import React, { useState } from 'react';
import AppHeader from '../../../components/AppHeader';
import ScoreGraph from '../../../Components/ScoreGraph';
import FeedbackTable from '../../../components/bootcamper/FeedbackTable';
import serverSideProps from '../../../libs/functions/serverSideProps';

export default function MasteryTasks({ session }) {
  const [week, setWeek] = useState(1);
  return (
    <div>
      <AppHeader session={session} />
      <ScoreGraph
        setWeek={setWeek}
        taskType='Mastery'
        feedbackData={session.data}
      />
      <FeedbackTable session={session} week={week} />
    </div>
  );
}

export async function getServerSideProps(context) {
  async function fetchFeedbackData(url, uid) {
    const res = await fetch(`${url}feedback?uid=${uid}&type=mastery`); // mastery task score
    const { data } = await res.json();
    return data;
  }
  return serverSideProps(context, fetchFeedbackData);
}

//function to get the feedback from the backend, may need some refactoring to have consistancy with variable names
