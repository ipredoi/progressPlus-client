import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/signOut';
import BootcampterListLink from '../components/bootcamperListLink';
import useUser from '../firebaseAuthUtils/useUser';
import getFeedback from '../libs/functions/getFeedback';

export default function Bootcamper() {
  const { user } = useUser;

  user = { ...user, id: 'd6587569589dk3r437890584gjfni' };

  getFeedback(url, user.id, recap);

  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar />
        <BootcampterListLink />
      </header>
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}
