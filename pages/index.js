import FirebaseAuth from '../components/authentication/Firebase';
import styles from './index.module.css';
import Image from 'next/image';
<<<<<<< HEAD
import LoginBackgroundImg from '../components/loginBackgroundImg/LoginBackgroundImg';
=======
import LoginBackgroundImg from '../components/LoginBackgroundImg';
>>>>>>> dev
export default function Login() {
  return (
    <div className={styles.auth}>
      <LoginBackgroundImg />
      <div className={styles.authMain}>
        <div className={styles.socImage}>
          <Image
            src='/Logo.png'
            alt='School of Code Logo'
            width={100}
            height={100}
          />
        </div>
        <div>
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
