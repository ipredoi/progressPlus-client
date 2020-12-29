import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/signOut';
import BootcampterListLink from '../components/bootcamper/BootcamperListLink';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';

export default function MasteryTasks({ session }) {
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar />
        <BootcampterListLink />
        <button
          onClick={() => {
            console.log(session.data);
          }}>
          Testing data
        </button>
      </header>
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

    const res = await fetch(`http://localhost:5000/feedback/${uid}/mastery`);
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
