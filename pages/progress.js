import CoachListLink from '../components/coach/CoachListLink';
import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/signOut';
// import ProgressList from '../components/ProgressList';
import ProgressButton from '../components/coach/progressButton';
import FeedbackTable from '../components/table';

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
