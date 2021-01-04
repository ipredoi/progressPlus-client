import RecapGraph from '../components/bootcamper/RecapGraph';
import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import LogOutButton from '../components/LogOutButton';
import NavBar from '../components/NavBar';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import serverSideProps from '../libs/functions/serverSideProps';

export default function GraphTest({ session, data }) {
  console.log(`test: name:${session.name}, uid:${session.uid}`);
  return (
    <div>
      <header className='header'>
        <LogOutButton />
        <Avatar />
        <NavBar linksAndTitles={bootcamperNavBarArr} />
      </header>
      <RecapGraph session={session} />
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  //specific fetch request to pull graph data, to be called below in serverSideProps function
  async function graphFetchRequest() {
    const res = await fetch(
      `http://ismail-esta-final-project.herokuapp.com/feedback?type=mastery&uid=d6587569589dk3r437890584gjfni`
    );
    // const res = await fetch(`${url}feedback?uid=${uid}&type=mastery`);
    // need to post <real-data> to feedback table in db
    const data = await res.json();
    return data;
  }

  return serverSideProps(context, graphFetchRequest);
}
