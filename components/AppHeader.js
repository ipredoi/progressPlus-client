import styles from '../styles/componentStyle/appHeader.module.css';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import Avatar from './Avatar';
import NavBar from './NavBar';

export default function AppHeader({
  session,
  navBarArr = bootcamperNavBarArr,
  title,
}) {
  return (
    <section className={styles.header}>
      <div className={styles.avatar}>
        <img
          className={styles.astronaut}
          src='/astronaut1.png'
          alt='School of Code Astronaut'
        />

        <div className={styles.title}>
          <h1>{title}</h1>
        </div>

        <Avatar src={session.picture} name={session.name} />
      </div>
      <NavBar linksAndTitles={navBarArr} />
    </section>
  );
}
