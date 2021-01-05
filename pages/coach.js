import styles from '../styles/coach.module.css';
import NavBar from '../components/NavBar';
import { coachNavBarArr } from '../libs/globalvariables/navBarArrays';
import Avatar from '../components/avatar';
import CoachButton from '../components/coach/CoachButton';
import UsefulLinks from '../components/usefulLinks';
import LogOutButton from '../components/LogOutButton';
import QuoteHeader from '../Components/QuoteHeader';
import serverSideProps from '../libs/functions/serverSideProps';
import { useRouter } from 'next/router';

export default function Coach({ session }) {
  const router = useRouter();

  if (!session) {
    router.push('/');
  } else if (session.role !== 'Coach') {
    router.push(`/${session.role.toLowerCase()}`);
  } else {
    return (
      <div>
        <header className='header'>
          <LogOutButton />
          <Avatar src={session.picture} name={session.name} />
          <NavBar linksAndTitles={coachNavBarArr} />
        </header>
        <QuoteHeader />
        <CoachButton />
        <footer className={styles.coachButton}>
          <UsefulLinks />
        </footer>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
