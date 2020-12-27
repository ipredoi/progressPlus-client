import FirebaseAuth from '../Components/authentication/firebase';
import '../public/authentication.css';
import Image from 'next/image';

export default function Login() {
  return (
    <div className='auth'>
      <div className='auth-main'>
        <div className='soc-image'>
          <Image
            src='/Logo.png'
            alt='School of Code Logo'
            width={100}
            height={100}
          />
        </div>
        <h1>Platform Name Here</h1>
        <FirebaseAuth />
        <br />
        <br />
      </div>
    </div>
  );
}
