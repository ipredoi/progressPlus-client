import { Link } from '@material-ui/core';
import TemporaryDrawer from '../components/temporaryDrawer';
import BadgeAvatars from '../components/badgeAvatars';
import MenuListComposition from '../components/menuListComposition';

export default function Home() {
  return (
    <div>
      <TemporaryDrawer />
      <h1 className='h1'>
        "Ruby is rubbish! PHP is phpantastic!" – Nikita Popov
      </h1>
      <BadgeAvatars />
      <MenuListComposition />
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
