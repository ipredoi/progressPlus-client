import Avatar from '../components/avatar';
import UsefulLinks from '../components/usefulLinks';
import SignOut from '../components/signOut';
import BootcampterListLink from '../components/bootcamper/BootcamperListLink';

export default function Bootcamper({ data }) {
  // getFeedback('http://localhost/5000', '1', 'mastery');
  console.log(data);
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar />
        <BootcampterListLink />
      </header>
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:5000/feedback/1/mastery`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

//function to get the feedback from the backend, may need some refactoring to have consistancy with variable names
