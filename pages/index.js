import FirebaseAuth from '../components/authentication/Firebase';
import styles from './index.module.css';
import Image from 'next/image';

export default function Login() {
  return (
    <div className={styles.auth}>
      <div className={styles.authMain}>
        <div className={styles.logoImage}>
          <Image src='/progressplus.png' alt='Logo' width={100} height={100} />
        </div>
        {/* <h1 className={styles.h1}>Platform Name Here</h1> */}
        <FirebaseAuth />
        <br />
        <br />
      </div>
    </div>
  );
}
