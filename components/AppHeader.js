import styles from '../styles/componentStyle/appHeader.module.css';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import Avatar from './Avatar';
import NavBar from './NavBar';
import { appName } from '../libs/globalVariables/appName';

export default function AppHeader({
  session,
  navBarArr = bootcamperNavBarArr,
}) {
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
      </div>
      <NavBar linksAndTitles={navBarArr} />
    </section>
  );
}
