import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import StudentCard from '../components/bootcamper/studentCard';
import SignOut from '../components/signOut';
import BootcampterListLink from '../components/bootcamper/bootcamperListLink';

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
      {/* <img src={user.photoURL} alt='profile photo' /> */}
      {/* <MenuListComposition /> */}
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}
