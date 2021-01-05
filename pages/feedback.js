import FeedbackForm from '../components/feedbackForm';
import NavBar from '../components/NavBar';

import { coachNavBarArr } from '../libs/globalvariables/navBarArrays';
import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import LogOutButton from '../Components/LogOutButton';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';
import { useState } from 'react';
import { url } from '../libs/globalVariables/backendUrl';

//page for coaches to submit feedback
export default function Feedback({ session }) {
  const [bootcamperName, setbootcamperName] = useState('');
  const [taskType, setTaskType] = useState('');
  const [subject, setSubject] = useState('');
  const [week, setWeek] = useState('');
  console.log(bootcamperName);
  console.log(taskType);
  console.log(subject);
  console.log(week);
  var dateTime = new Date().toLocaleString();

  // saving all bootcampers info in an array
  let bootcampersInfoArr = session.bootcampersList.data;

  // need to find uid coresponding to bootcampers name
  // filter bootcampersInfoArr by current bootcamper name--> returning an array with an object --> acces the property uid
  if (bootcamperName) {
    let bootcamperUid = bootcampersInfoArr.filter(function (item) {
      return item.name === `${bootcamperName}`;
    })[0].uid;
    console.log(bootcamperUid);
  }

  function submitFeedback(e) {
    e.preventDefault();
    fetch(`${url}feedback`, {
      method: 'POST',
      body: JSON.stringify({
        bootcamperuid: `${bootcamperUid}`,
        coachname: 'name', //❗❗we need to fetch user name from DB where ID = uid ...may need a function in backend
        feedbackdate: `${dateTime}`,
        subject: `${subject}`,
        week: `${week}`,
        type: `${taskType}`,
        quantitative: '10/12',
        qualitative: 'very good work',
        duedate: '2020-12-02T00:00:00.000Z',
        datesubmitted: '2020-12-02T00:00:00.000Z',
      }),
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log('handlesubmit working');
  }

  if (!session) {
    return <p>loading</p>;
  }
  return (
    <div>
      <header className="header">
        <LogOutButton />
        <Avatar src={session.picture} name={'session.name'} />
        <NavBar linksAndTitles={coachNavBarArr} />
      </header>
      <FeedbackForm
        bootcampersInfoArr={bootcampersInfoArr}
        submitFeedback={submitFeedback}
        setbootcamperName={(e, data) => {
          setbootcamperName(data.value);
        }}
        setTaskType={(e, data) => {
          setTaskType(data.value);
        }}
        setSubject={(e) => setSubject(e.target.value)}
        setWeek={(e, data) => {
          setWeek(data.value);
        }}
      />
      <footer className="footer">
        <UsefulLinks />
      </footer>
    </div>
  );
}
export async function getServerSideProps(context) {
  async function masteryTaskFetchRequest(url, uid) {
    console.log(url, uid);
    const res = await fetch(`${url}`);
    const data = await res.json();
    return data;
  }

  return serverSideProps(context, masteryTaskFetchRequest);
}
