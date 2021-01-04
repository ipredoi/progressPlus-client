import FeedbackForm from '../components/FeedbackForm';
import NavBar from '../components/NavBar';
import { coachNavBarArr } from '../libs/globalVariables/navBarArrays';
import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import LogOutButton from '../components/LogOutButton';
import serverSideProps from '../libs/functions/serverSideProps';

//page for coaches to submit feedback
export default function Feedback() {
  return (
    <div>
      <header className="header">
        <LogOutButton />
        <Avatar src={'session.picture'} name={'session.name'} />
        <NavBar linksAndTitles={coachNavBarArr} />
      </header>
      <FeedbackForm />
      <footer className="footer">
        <UsefulLinks />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
