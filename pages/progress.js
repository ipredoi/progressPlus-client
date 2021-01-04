import NavBar from '../components/NavBar';
import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import LogOutButton from '../components/LogOutButton';
import ProgressButton from '../components/coach/ProgressButton';
import serverSideProps from '../libs/functions/serverSideProps';

import { url } from '../libs/globalVariables/backendUrl';

export default function Feedback({ session }) {
  const feedbackArray = session.data.data;

  return (
    <div>
      <header className='header'>
        <LogOutButton />
        <Avatar src={session.picture} name={session.name} />
        {/*  <NavBar /> */}
      </header>
      <ProgressButton bootcampersArray={feedbackArray} />
      <div>
        <table>
          <thead>
            <tr>
              <th>Bootcamper</th>
              <th>Subject</th>
              <th>Week</th>
              <th>Task type</th>
              <th>Score</th>
              <th>Comments</th>
              <th>Date submitted</th>
              <th>Due date</th>
            </tr>
          </thead>

          {feedbackArray.map((feedbackData) => {
            return (
              <tr>
                <td>{feedbackData.bootcamperuuid}</td>
                <td>{feedbackData.subject}</td>
                <td>{feedbackData.week}</td>
                <td>{feedbackData.tasktype}</td>
                <td>{feedbackData.quantitative}</td>
                <td>{feedbackData.qualitative}</td>
                <td>{feedbackData.datesubmitted}</td>
                <td>{feedbackData.duedate}</td>
              </tr>
            );
          })}
        </table>
      </div>
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
    console.log(token);
    const { uid, email, name, picture } = token;

    const res = await fetch(`${url}feedback`);
    //this is fetching info from our DB through the hosted backend URL. The URL variable is stored in globalVariables where it is also using dotenv to keep the URL private.
    const data = await res.json();

    return {
      props: { session: { data, name, uid, email, picture } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return { props: {} };
  }
}
