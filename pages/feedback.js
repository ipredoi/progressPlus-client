import FeedbackForm from '../components/feedbackForm';
import CoachListLink from '../components/coachListLink';
import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/signOut';

export default function Feedback() {
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar />
        <CoachListLink />
      </header>
      <FeedbackForm />
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}
