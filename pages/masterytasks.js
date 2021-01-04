import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import LogOutButton from '../components/LogOutButton';
import NavBar from '../components/NavBar';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';

export default function MasteryTasks({ session }) {
  return (
    <div>
      <header className="header">
        <LogOutButton />
        <Avatar src={'session.picture'} name={'session.name'} />
        <NavBar linksAndTitles={bootcamperNavBarArr} />
        <button
          onClick={() => {
            console.log(session.data);
          }}>
          Testing data
        </button>
      </header>
      <footer className="footer">
        <UsefulLinks />
      </footer>
    </div>
  );
}

const url = process.env.NEXT_APP_BACKEND_URL;
// uncomment when backend tables are sorted

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    console.log(token);
    const { uid, email, name, picture } = token;

    const res = await fetch(`${url}feedback?uid=${uid}&type=mastery`);
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
