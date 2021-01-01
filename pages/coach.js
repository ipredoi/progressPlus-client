import NavBar from '../components/NavBar';
import { coachNavBarArr } from '../libs/globalvariables/navBarArrays';
import Avatar from '../components/avatar';
import CoachButton from '../components/coach/CoachButton';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/SignOut';

export default function Coach() {
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
      <CoachButton />
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}
