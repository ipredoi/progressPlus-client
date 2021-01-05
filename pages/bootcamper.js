import Avatar from '../components/Avatar';
import UsefulLinks from '../components/usefulLinks';
import StudentCard from '../components/bootcamper/studentCard';
import LogOutButton from '../components/LogOutButton';
import NavBar from '../components/NavBar';
import QuoteHeader from '../Components/QuoteHeader';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import serverSideProps from '../libs/functions/serverSideProps';

export default function Bootcamper({ session }) {
  async function getQuestion() {
    const result = await fetch(
      'https://opentdb.com/api.php?amount=50&category=18&difficulty=easy&type=boolean'
    );
    const data = await result.json();
    console.log(data);
  }

  getQuestion();

  if (!session) {
    return (
      <div>
        <img className='loadingImg' src='/source.gif' alt='loadingImg' />
      </div>
    );
  } else {
    return (
      <div>
        <header className='header'>
          <LogOutButton />
          <Avatar src={session.picture} name={session.name} />
          <NavBar linksAndTitles={bootcamperNavBarArr} />
        </header>
        <QuoteHeader />

        <StudentCard img={session.picture} />
        {/* //<img img={session.picture} alt='profile photo' /> */}
        {/* <MenuListComposition /> */}
        <footer className='footer'>
          <UsefulLinks />
        </footer>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
