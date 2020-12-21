import { Link } from '@material-ui/core';
import TemporaryDrawerCoach from '../Components/temporaryDrawerCoach';
import BadgeAvatars from '../Components/badgeAvatars';
import MenuListComposition from '../Components/menuListComposition';
import CoachPortalButton from '../Components/CoachPortalButton';

export default function Coach() {
  return (
    <div>
      <TemporaryDrawerCoach />
      <h1 className='h1'>
        "Ruby is rubbish! PHP is phpantastic!" – Nikita Popov
      </h1>
      <BadgeAvatars />
      <MenuListComposition />
      <CoachPortalButton />
      <Link
        target='_blank'
        id='gitHubLink'
        className='links'
        href='https://github.com/'>
        Git Hub
      </Link>
      {/* <Link target="_blank" href='http://freecodecamp.org/'>
      Free Code Camp
      </Link>
        <Link target="_blank" href='https://www.codewars.com/'>
        Code Wars
        </Link>
        <Link target="_blank" href='https://stackoverflow.com/'>
        Stack Overflow
        </Link>
        <Link target="_blank" href='https://www.w3schools.com/'>
        W3 Schools
        /<Link>
        <Link target="_blank" href='https://developer.mozilla.org/en-US/'>
        MDN Web Docs
        </Link> */}
    </div>
  );
}
