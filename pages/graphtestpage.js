import RecapGraph from '../components/bootcamper/RecapGraph';
import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/signOut';
import BootcampterListLink from '../components/bootcamper/bootcamperListLink';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';

export default function GraphTest({ session, data }) {
  console.log(`test: name:${session.name}, uid:${session.uid}`);
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar />
        <BootcampterListLink />
      </header>
      <RecapGraph session={session} />
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}

const url = process.env.NEXT_APP_BACKEND_URL;

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    console.log(token);
    const { uid, email, name, picture } = token;

    const res = await fetch(
      `http://ismail-esta-final-project.herokuapp.com/feedback?type=mastery&uid=d6587569589dk3r437890584gjfni`
    );
    // const res = await fetch(`${url}feedback?uid=${uid}&type=mastery`);
    // need to post <real-data> to feedback table in db
    const data = await res.json();

    return {
      props: { session: { name, uid, data } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    console.log(err.message);
    return { props: {} };
  }
}

//function to get the feedback from the backend, may need some refactoring to have consistancy with variable names
