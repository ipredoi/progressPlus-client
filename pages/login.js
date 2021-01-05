import FirebaseAuth from '../components/authentication/firebase';
import styles from '../styles/pagesStyle/login.module.css';
import Image from 'next/image';

export default function Login() {
  return (
    <div className={styles.auth}>
      <div className={styles.authMain}>
        <div className={styles.socImage}>
          <Image
            src='/Logo.png'
            alt='School of Code Logo'
            width={100}
            height={100}
          />
        </div>
        <h1 className={styles.h1}>Platform Name Here</h1>
        <FirebaseAuth />
        <br />
        <br />
      </div>
    </div>
  );
}
