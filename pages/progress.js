import CoachListLink from '../Components/coachListLink';
import Avatar from '../Components/avatar';
import UsefulLinks from '../Components/usefulLinks';
import SignOut from '../Components/signOut';
// import ProgressList from '../Components/ProgressList';
import ProgressButton from '../Components/progressButton';
import FeedbackTable from '../Components/table';

export default function Feedback() {
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar />
        <CoachListLink />
      </header>
      <ProgressButton />
      <FeedbackTable />
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}
