import FeedbackForm from '../components/feedbackForm';
import NavBar from '../components/NavBar';
import coachNavBarArr from '../libs/global variables/navBarArrays';
import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/signOut';

//form for coaches to submit feedback
export default function Feedback() {
  let navBarArr = [
    { link: '/coach', title: 'Home' },
    { link: '/feedback', title: 'Submit Feedback' },
    { link: '/progress', title: 'Track Progress' },
  ];
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
