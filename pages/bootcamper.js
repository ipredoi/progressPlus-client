import Avatar from '../components/avatar';

import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';

import UsefulLinks from '../components/usefulLinks';
import StudentCard from '../components/bootcamper/studentCard';
import SignOut from '../components/signOut';
import BootcampterListLink from '../components/bootcamper/bootcamperListLink';

export default function Bootcamper({ session }) {
  if (!session) {
    return <p>Loading</p>;
  }
  console.log(session);
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar />
        <BootcampterListLink />
      </header>
      <h1 className='h1'>
        {session.name}
        "Ruby is rubbish! PHP is phpantastic!" – Nikita Popov
      </h1>
      <StudentCard />
      {/* <img src={user.photoURL} alt='profile photo' /> */}
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
