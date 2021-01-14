import styles from './appHeader.module.css';
import { bootcamperNavBarArr } from '../../libs/globalVariables/navBarArrays';
import Avatar from '../Avatar';
import NavBar from '../NavBar';
import Image from 'next/image';
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
          <div>
            <Image
              src='/progressPlusWhite.png'
              alt='Progress Plus'
              width={200}
              height={80}
            />
          </div>
        </div>
        <Avatar src={session.picture} name={session.name} />
      </div>
      <NavBar linksAndTitles={navBarArr} />
    </section>
  );
}
