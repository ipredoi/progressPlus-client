import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import LogOutButton from '../components/LogOutButton';
import NavBar from '../components/NavBar';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';

export default function RecapTasks({ session }) {
  return (
    <div>
      <header className='header'>
        <LogOutButton />
        <Avatar src={'session.picture'} name={'session.name'} />
        <NavBar linksAndTitles={bootcamperNavBarArr} />
        <button
          onClick={() => {
            console.log(session.data);
          }}>
          Testing data in console
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

    const res = await fetch(`${url}feedback?uid=${uid}&type=recap`);
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
