import Avatar from '../Components/avatar';
import UsefulLinks from '../Components/usefulLinks';
import SignOut from '../Components/signOut';
import BootcampterListLink from '../Components/bootcamperListLink';

export default function Bootcamper() {
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
