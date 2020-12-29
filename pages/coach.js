import { Link } from '@material-ui/core';
import CoachListLink from '../components/coach/CoachListLink';
import Avatar from '../components/avatar';
import CoachButton from '../components/coach/CoachButton';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/signOut';

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
