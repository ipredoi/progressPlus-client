import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import StudentCard from '../components/bootcamper/StudentCard';
import LogOutButton from '../components/LogOutButton';
import NavBar from '../components/NavBar';
import nookies from 'nookies';
import QuoteHeader from '../Components/QuoteHeader';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';

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
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    console.log(token);
    const { uid, email, name, picture } = token;
    console.log(name);

    return {
      props: { session: { uid, email, picture } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return { props: {} };
  }
}
