import { Link } from '@material-ui/core';
import CoachListLink from '../components/coach/CoachListLink';
import Avatar from '../components/avatar';
import CoachButton from '../components/coach/CoachButton';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/signOut';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';

export default function Coach({ session }) {
  if (!session) {
    return null;
  }
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar src={session.picture} name={session.name} />
        <CoachListLink />
      </header>
      <h1 className='h1'>
        "Ruby is rubbish! PHP is phpantastic!" – Nikita Popov
      </h1>

      <Avatar src={session.picture} name={session.name} />
      {/* <MenuListComposition /> */}
      <CoachButton />
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
