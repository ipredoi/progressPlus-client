import Avatar from '../Components/avatar';
import UsefulLinks from '../Components/usefulLinks';
import SignOut from '../Components/signOut';
import BootcampterListLink from '../Components/bootcamperListLink';
import getFeedback from '../functions/getFeedback';

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

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/feedback/1/mastery`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

//function to get the feedback from the backend, may need some refactoring to have consistancy with variable names
