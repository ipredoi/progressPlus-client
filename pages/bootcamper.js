import { Link } from '@material-ui/core';
import Avatar from '../Components/avatar';
// import MenuListComposition from '../Components/menuListComposition';
import UsefulLinks from '../Components/usefulLinks';
import StudentCard from '../Components/studentCard';
import SignOut from '../Components/signOut';
import BootcampterListLink from '../Components/bootcamperListLink';

export default function Bootcamper() {
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar />
        <BootcampterListLink />
      </header>
      <h1 className='h1'>
        "Ruby is rubbish! PHP is phpantastic!" – Nikita Popov
      </h1>
      <StudentCard />
      {/* <MenuListComposition /> */}
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}
