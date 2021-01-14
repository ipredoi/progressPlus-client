import styles from './appHeader.module.css';
import { bootcamperNavBarArr } from '../../libs/globalVariables/navBarArrays';
import Avatar from '../Avatar';
import NavBar from '../NavBar';
import { appName } from '../../libs/globalVariables/appName';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuthContext } from '../../firebaseUtils/useAuthContext';

export default function AppHeader({
  session,
  navBarArr = bootcamperNavBarArr,
}) {
  const { open, setOpen } = useAuthContext();

  return (
    <section className={styles.header}>
      <div className={styles.avatar}>
        <img
          className={styles.socLogo}
          src='/Logo.png'
          alt='School of Code Logo'
        />

        <div className={styles.title}>
          <h1 className={styles.text}>{appName}</h1>
        </div>

        <Avatar src={session.picture} name={session.name} />
        <GiHamburgerMenu
          className={styles.hamburgerIcon}
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      <NavBar linksAndTitles={navBarArr} />
    </section>
  );
}
