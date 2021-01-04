import FeedbackForm from '../components/feedbackForm';
import NavBar from '../components/NavBar';
import { coachNavBarArr } from '../libs/globalvariables/navBarArrays';
import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import LogOutButton from '../Components/LogOutButton';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';
import { url } from '../libs/globalVariables/backendUrl';

//page for coaches to submit feedback
export default function Feedback({ session }) {
  console.log(session);
  let bootcampersArray = session.bootcampersList.data;

  //
  let bootcampersNames = bootcampersArray.map((bootcamper) => {
    return bootcamper.name;
  });
  console.log(bootcampersNames);
  console.log(bootcampersArray);

  let keyArray = bootcampersNames.map((e) => {
    return e.charAt(0).toLowerCase();
  });
  console.log(keyArray);

  let array1 = keyArray.concat(bootcampersNames, bootcampersNames);
  console.log(array1);

  function arra2(name) {
    return name.reduce(
      (acc, cur) => {
        return { name: cur, cur };
      },
      { name: '' }
    );
  }
  console.log(arra2(bootcampersNames));

  function submitFeedback(e) {
    e.preventDefault();
    fetch(`${url}feedback`, {
      method: 'POST',
      body: JSON.stringify({
        bootcamperuid: 'bootcamperuidTest',
        coachname: 'coachnameTest',
        feedbackdate: `${Date.now()}`,
        subject: 'React',
        week: 1,
        type: 'mastery',
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
    return <p>NO SESSION</p>;
  }
  return (
    <div>
      <header className='header'>
        <LogOutButton />
        <Avatar src={session.picture} name={'session.name'} />
        <NavBar linksAndTitles={coachNavBarArr} />
      </header>
      <FeedbackForm bootcamperName={bootcampersNames} />
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);

    const { uid, picture } = token;
    console.log(token);
    // getting all bootcampers from the backend
    const res = await fetch(`${url}`);
    const bootcampersList = await res.json();
    console.log(bootcampersList);
    return {
      props: { session: { bootcampersList, uid, picture } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return { props: {} };
  }
}
