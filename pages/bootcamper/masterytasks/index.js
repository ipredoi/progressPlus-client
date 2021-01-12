import React, { useState } from "react";
import AppHeader from "../../../components/AppHeader";
import AppFooter from "../../../components/AppFooter";
import ScoreGraph from "../../../Components/ScoreGraph";
import FeedbackTable from "../../../components/bootcamper/FeedbackTable";
import serverSideProps from "../../../libs/functions/serverSideProps";
import LoadingImg from "../../../components/LoadingImg";

export default function MasteryTasks({ session }) {
  const [selectedData, setSelectedData] = useState(1);
  // console.log(session);
  if (!session) {
    return <LoadingImg />;
  }

  return (
    <div>
      <AppHeader session={session} title={"SoC Progress Tracker"} />
      <ScoreGraph
        feedbackData={session.data}
        setSelectedData={setSelectedData}
        taskType='Mastery'
        myName={session.name}
      />
      <FeedbackTable selectedData={selectedData} />
      <AppFooter />
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
