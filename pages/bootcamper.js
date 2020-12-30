import Avatar from '../components/avatar';
// import MenuListComposition from '../components/menuListComposition';
import UsefulLinks from '../components/usefulLinks';
import StudentCard from '../components/bootcamper/studentCard';
import SignOut from '../components/SignOut';
import NavBar from '../components/NavBar';
import bootcamperNavBarArr from '../libs/global variables/navBarArrays';

export default function Bootcamper({ session }) {
  let navBarArr = [
    { link: '/bootcamper', title: 'Home' },
    { link: '/masterytasks', title: 'Mastery Tasks' },
    { link: '/recaptasks', title: 'Recap Tasks' },
  ];
  console.log(session);
  if (!session) {
    return (
      <div className='register-form'>
        <img className='loadingImg' src='/source.gif' alt='loadingImg' />
      </div>
    );
  } else
    return (
      <div>
        <header className='header'>
          <SignOut />
          <Avatar />
          <NavBar linksAndTitles={bootcamperNavBarArr} />
        </header>
        <h1 className='h1'>
          "Ruby is rubbish! PHP is phpantastic!" – Nikita Popov
        </h1>
        <StudentCard />
        <img src={session.photoURL} alt='profile photo' />
        {/* <MenuListComposition /> */}
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

    return {
      props: { session: { name, uid, email, picture } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return { props: {} };
  }
}
