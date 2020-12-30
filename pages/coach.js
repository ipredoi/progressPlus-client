import { Link } from '@material-ui/core';
import Navbar from '../components/NavBar';
import coachNavBarArr from '../libs/globalvariables/navBarArrays';
import Avatar from '../components/avatar';
// import MenuListComposition from '../components/menuListComposition';
import CoachButton from '../components/coach/CoachButton';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/SignOut';

export default function Coach() {
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
      <h1 className='h1'>
        "Ruby is rubbish! PHP is phpantastic!" – Nikita Popov
      </h1>
      <Avatar />
      {/* <MenuListComposition /> */}
      <CoachButton />
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}
