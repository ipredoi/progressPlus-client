import FeedbackForm from '../components/feedbackForm';
import NavBar from '../components/NavBar';
import { coachNavBarArr } from '../libs/globalvariables/navBarArrays';
import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/signOut';

//form for coaches to submit feedback
export default function Feedback() {
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar />
        <NavBar linksAndTitles={coachNavBarArr} />
      </header>
      <FeedbackForm />
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}
