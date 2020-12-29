import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/signOut';
import BootcampterListLink from '../components/bootcamper/bootcamperListLink';
import { useAuthContext } from '../firebaseAuthUtils/useAuthContext';
import getFeedback from '../libs/functions/getFeedback';

export default function Bootcamper() {
  const { user } = useAuthContext();

  //hard coded userID, solely to test out fetch request
  // user = { ...user, id: 'd6587569589dk3r437890584gjfni' };

  // getFeedback(url, user.id, recap);

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
