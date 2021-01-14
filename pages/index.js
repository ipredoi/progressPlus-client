import FirebaseAuth from '../components/authentication/Firebase';
import styles from './index.module.css';
import Image from 'next/image';
import { appName } from '../libs/globalVariables/appName';

export default function Login() {
  return (
    <div className={styles.auth}>
      <div className={styles.planetSocImg}>
        <Image
          src='/planet_soc.png'
          alt='School of Code Logo'
          width={500}
          height={500}
        />
      </div>
      <div className={styles.moonSocImg}>
        <Image src='/moon.png' alt='School of Code Logo' layout='fill' />
      </div>

      <div className={styles.authMain}>
        <div className={styles.socImage}>
          <Image
            src='/Logo.png'
            alt='School of Code Logo'
            width={100}
            height={100}
          />
        </div>
        <h1 className={styles.h1}>{appName}</h1>
        <FirebaseAuth />
      </div>
    </div>
  );
}
