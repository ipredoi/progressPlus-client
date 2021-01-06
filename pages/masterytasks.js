import React, { useState } from 'react';
import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import NavBar from '../components/NavBar';
import ScoreGraph from '../components/bootcamper/ScoreGraph';
import FeedbackTable from '../components/bootcamper/FeedbackTable';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import serverSideProps from '../libs/functions/serverSideProps';
import LoadingImg from '../components/LoadingImg';

export default function MasteryTasks({ session }) {
  // const [w1Feedback, setW1Feedback] = useState('');
  // const [w2Feedback, setW1Feedback] = useState('');
  // const [w3Feedback, setW1Feedback] = useState('');
  // const [w4Feedback, setW1Feedback] = useState('');
  // const [w5Feedback, setW1Feedback] = useState('');
  // const [w6Feedback, setW1Feedback] = useState('');
  // const [w7Feedback, setW1Feedback] = useState('');
  // const [w8Feedback, setW1Feedback] = useState('');
  // const [w9Feedback, setW1Feedback] = useState('');
  // const [w10Feedback, setW1Feedback] = useState('');
  // const [w11Feedback, setW1Feedback] = useState('');
  // const [w12Feedback, setW1Feedback] = useState('');
  // const [w13Feedback, setW1Feedback] = useState('');
  // const [w14Feedback, setW1Feedback] = useState('');
  // const [w15Feedback, setW1Feedback] = useState('');
  // const [w16Feedback, setW1Feedback] = useState('');

  const [week, setWeek] = useState('');

  console.log(`test: name:${session.name}, uid:${session.uid}`);

  if (!session) {
    return <LoadingImg />;
  }

  return (
    <div>
      <header className='header'>
        <Avatar src={session.picture} name={session.name} />
        <NavBar linksAndTitles={bootcamperNavBarArr} />
      </header>
      <ScoreGraph session={session} setWeek={setWeek} />
      <FeedbackTable session={session} week={week} />

      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  async function fetchFeedbackData(url, uid) {
    const res = await fetch(`${url}feedback?uid=${uid}&type=mastery`); // mastery task score
    const { data } = await res.json();
    console.log(data);
    return data;
  }
  return serverSideProps(context, fetchFeedbackData);
}

//function to get the feedback from the backend, may need some refactoring to have consistancy with variable names
