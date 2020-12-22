import CoachListLink from '../Components/coachListLink';
import Avatar from '../Components/avatar';
import UsefulLinks from '../Components/usefulLinks';
import SignOut from '../Components/signOut';

export default function Feedback() {
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar />
        <CoachListLink />
      </header>
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}
