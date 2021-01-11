import React, { useState } from 'react';
import AppHeader from '../../../components/AppHeader';
<<<<<<< HEAD
import AppFooter from '../../../components/AppFooter';
import serverSideProps from '../../../libs/functions/serverSideProps';
import LoadingImg from '../../../components/LoadingImg';
=======
import serverSideProps from '../../../libs/functions/serverSideProps';
>>>>>>> 55959991d684ebdcebd3844bf08a545a11830bb6
import ScoreGraph from '../../../components/ScoreGraph';
import FeedbackTable from '../../../components/bootcamper/FeedbackTable';

export default function RecapTasks({ session }) {
  const [week, setWeek] = useState(1);
  return (
    <div>
<<<<<<< HEAD
      <AppHeader session={session} />
=======
      <AppHeader session={session} title={'SoC Progress Tracker'} />
>>>>>>> 55959991d684ebdcebd3844bf08a545a11830bb6
      <ScoreGraph
        feedbackData={session.data}
        setWeek={setWeek}
        taskType='Recap'
      />
      <FeedbackTable week={week} session={session} />
    </div>
  );
}

export async function getServerSideProps(context) {
  async function fetchFeedbackData(url, uid) {
    const res = await fetch(`${url}feedback?uid=${uid}&type=recap`); // recap task score
    const { data } = await res.json();
    // console.log(data);
    return data;
  }
  return serverSideProps(context, fetchFeedbackData);
}

//function to get the feedback from the backend, may need some refactoring to have consistancy with variable names
