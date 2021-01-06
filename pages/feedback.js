import FeedbackForm from '../components/feedbackForm';
import NavBar from '../components/NavBar';
import { coachNavBarArr } from '../libs/globalvariables/navBarArrays';
import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import LogOutButton from '../Components/LogOutButton';
import { useState } from 'react';
import { backendUrl } from '../libs/globalVariables/urls';
import serverSideProps from '../libs/functions/serverSideProps';
import LoadingImg from '../components/LoadingImg';
import AppHeader from '../Components/AppHeader';
import AppFooter from '../Components/AppFooter';

//page for coaches to submit feedback
export default function Feedback({ session }) {
  const [bootcamperName, setbootcamperName] = useState('');
  const [taskType, setTaskType] = useState('');
  const [subject, setSubject] = useState('');
  const [week, setWeek] = useState();
  const [passedTests, setPassedTests] = useState();
  const [totalTests, setTotalTests] = useState();
  const [comments, setComments] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dateSubmitted, setDateSubmitted] = useState('');

  function resteInputs() {
    setbootcamperName('');
    setTaskType('');
    setSubject('');
    setWeek('');
    setPassedTests(0);
    setTotalTests(0);
    setDueDate('');
    setDateSubmitted('');
    setComments('');
    console.log('i work');
  }

  var dateTime = new Date().toLocaleString();

  // saving all bootcampers info in an array
  let bootcampersInfoArr = session.data;

  // need to find uid coresponding to bootcampers name
  // filter bootcampersInfoArr by current bootcamper name--> returning an array with an object --> acces the property uid
  if (bootcamperName) {
    var bootcamperUid = bootcampersInfoArr.filter(function (item) {
      return item.name === `${bootcamperName}`;
    })[0].uid;
  }

  console.log(subject);
  // console.log(bootcamperUid);
  function submitFeedback(e) {
    e.preventDefault();
    fetch(`${backendUrl}feedback`, {
      method: 'POST',
      body: JSON.stringify({
        bootcamperuid: `${bootcamperUid}`,
        coachname: `${session.name}`,
        feedbackdate: `${dateTime}`,
        subject: `${subject}`,
        week: week,
        type: `${taskType}`,
        passedtests: passedTests,
        totaltests: totalTests,
        qualitative: `${comments}`,
        duedate: `${dueDate}`,
        datesubmitted: `${dateSubmitted}`,
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
    resteInputs();
  }

  if (!session) {
    return <LoadingImg />;
  }
  return (
    <div>
      <AppHeader session={session} navBarArr={coachNavBarArr} />
      <div className={styles.feedbackForm}>
        <FeedbackForm
          bootcameperName={bootcamperName}
          taskType={taskType}
          subject={subject}
          week={week}
          passedTests={passedTests}
          totalTests={totalTests}
          comments={comments}
          dueDate={dueDate}
          dateSubmitted={dateSubmitted}
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
          setPassedTests={(e) => setPassedTests(e.target.value)}
          setTotalTests={(e) => setTotalTests(e.target.value)}
          setComments={(e) => setComments(e.target.value)}
          setDueDate={(e) => setDueDate(e.target.value)}
          setDateSubmitted={(e) => setDateSubmitted(e.target.value)}
        />
      </div>

      <footer className={styles.footer}>
        <UsefulLinks />
      </footer>
    </div>
  );
}
export async function getServerSideProps(context) {
  async function fetchBootcampersData(url) {
    const res = await fetch(`${url}`);
    const { data } = await res.json();
    return data;
  }
  return serverSideProps(context, fetchBootcampersData);
}
