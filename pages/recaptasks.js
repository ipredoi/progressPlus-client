import React, { useState } from "react";
import AppHeader from "../Components/AppHeader";
import AppFooter from "../Components/AppFooter";
import serverSideProps from "../libs/functions/serverSideProps";
import LoadingImg from "../components/LoadingImg";
import ScoreGraph from "../components/bootcamper/ScoreGraph";
import FeedbackTable from "../components/bootcamper/FeedbackTable";

export default function RecapTasks({ session }) {
  const [week, setWeek] = useState(1);

  if (!session) {
    return <LoadingImg />;
  }
  return (
    <div>
      <AppHeader session={session} title={"WELCOME TO APP NAME"} />
      <ScoreGraph session={session} setWeek={setWeek} taskType='Recap' />
      <FeedbackTable session={session} week={week} />
      <AppFooter />
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
