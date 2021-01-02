import styles from '../styles/coach.module.css';
import NavBar from '../components/NavBar';
import { coachNavBarArr } from '../libs/globalvariables/navBarArrays';
import Avatar from '../components/avatar';
import CoachButton from '../components/coach/CoachButton';
import UsefulLinks from '../components/usefulLinks';
import LogOutButton from '../Components/LogOutButton';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';

export default function Coach({ session }) {
  if (!session) {
    return null;
  } else
    return (
      <div>
        <header className='header'>
          <LogOutButton />
          <Avatar src={session.picture} name={session.name} />
          <NavBar linksAndTitles={coachNavBarArr} />
        </header>
        <h1 className='h1'>
          "Ruby is rubbish! PHP is phpantastic!" – Nikita Popov
        </h1>
        <CoachButton />
        <footer className={styles.coachButton}>
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

    return {
      props: { session: { name, uid, email, picture } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return { props: {} };
  }
}
