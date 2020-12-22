import { Link } from '@material-ui/core';
import Avatar from '../components/avatar';
// import MenuListComposition from '../Components/menuListComposition';
import UsefulLinks from '../components/usefulLinks';
import StudentCard from '../components/studentCard';
import SignOut from '../components/signOut';
import BootcampterListLink from '../components/bootcamperListLink';
import { AuthContext } from '../components/authentication/authContext';
import { useContext } from 'react';

export default function Bootcamper() {
  const user = useContext(AuthContext);
  console.log(user);

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
      <img src={user.photoURL} alt='profile photo' />
      {/* <MenuListComposition /> */}
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}
