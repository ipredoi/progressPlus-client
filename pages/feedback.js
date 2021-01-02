import FeedbackForm from '../components/feedbackForm';
import NavBar from '../components/NavBar';
import { coachNavBarArr } from '../libs/globalvariables/navBarArrays';
import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import LogOutButton from '../Components/LogOutButton';

//form for coaches to submit feedback
export default function Feedback() {
  return (
    <div>
      <header className='header'>
        <LogOutButton />
        <Avatar src={'session.picture'} name={'session.name'} />
        <NavBar linksAndTitles={coachNavBarArr} />
      </header>
      <FeedbackForm />
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}
