import styles from './appHeader.module.css';
import { bootcamperNavBarArr } from '../../libs/globalVariables/navBarArrays';
import NavBar from '../NavBar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuthContext } from '../../firebaseUtils/useAuthContext';

export default function AppHeader({
  session,
  navBarArr = bootcamperNavBarArr,
}) {
  const { open, setOpen } = useAuthContext();

  return (
    <section className={styles.header}>
      <div className={styles.container}>
        <GiHamburgerMenu
          className={styles.hamburgerIcon}
          onClick={() => {
            setOpen(!open);
          }}
        />
        {/* <img
          className={styles.socLogo}
          src='/Logo.png'
          alt='School of Code Logo'
        /> */}

        <div className={styles.title}>
          <img
            src='/progressPlusWhite.png'
            alt='Progress Plus'
            className={styles.progressPlus}
          />
        </div>
        <div className={styles.profile}>
          <p className={styles.user}>{session.name}</p>

          <img
            className={styles.avatarPic}
            src={session.picture}
            className={styles.avatar}
          />
        </div>
      </div>
      <NavBar linksAndTitles={navBarArr} />
    </section>
  );
}
