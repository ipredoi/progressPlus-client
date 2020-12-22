import { Link } from '@material-ui/core';
import CoachListLink from '../Components/coachListLink';
import Avatar from '../Components/avatar';
// import MenuListComposition from '../Components/menuListComposition';
import CoachButton from '../Components/coachButton';
import UsefulLinks from '../Components/usefulLinks';
import SignOut from '../Components/signOut';

export default function Coach() {
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar />
        <CoachListLink />
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
