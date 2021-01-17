import FirebaseAuth from '../components/authentication/Firebase';
import styles from './index.module.css';
import Image from 'next/image';
import LoginBackgroundImg from '../components/LoginBackgroundImg';
export default function Login() {
  return (
    <div className={styles.auth}>
      <LoginBackgroundImg />
      <div className={styles.authMain}>
        <div className={styles.socImage}>
          <Image
            src='/Logo.png'
            alt='School of Code Logo'
            width={230}
            height={230}
          />
        </div>
        <div className={styles.progressPlus}>
          <Image
            src='/progressPlus.png'
            alt='Progress Plus'
            width={200}
            height={60}
          />
        </div>
        <div className={styles.button}>
          <FirebaseAuth />
        </div>
      </div>
    </div>
  );
}
