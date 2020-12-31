import NavBar from '../components/NavBar';
import Avatar from '../components/Avatar';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/signOut';
// import ProgressList from '../components/ProgressList';
import ProgressButton from '../components/coach/progressButton';
//import FeedbackTable from '../components/table';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';
import nookies from 'nookies';
import { url } from '../libs/globalVariables/backendUrl';

export default function Feedback({ session }) {
  const feedbackArray = session.data.data;
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar
          src={session.picture}
          imgStyle={{ 'border-radius': '50%', height: 80 }}
        />
        <NavBar />
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
    const data = await res.json();
    //console.log(data);

    return {
      props: { session: { data, name, uid, email, picture } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return { props: {} };
  }
}
