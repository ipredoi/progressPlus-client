import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import LogOutButton from '../components/LogOutButton';
import NavBar from '../components/NavBar';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import serverSideProps from '../libs/functions/serverSideProps';

export default function RecapTasks({ session }) {
  return (
    <div>
      <header className="header">
        <LogOutButton />
        <Avatar src={session.picture} name={session.name} />
        <NavBar linksAndTitles={bootcamperNavBarArr} />
        <button
          onClick={() => {
            console.log(session);
          }}>
          Testing data in console
        </button>
      </header>
      <footer className="footer">
        <UsefulLinks />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  async function recapTaskFetchRequest(url, uid) {
    const res = await fetch(`${url}feedback?type=recap&uid=${uid}`);

    const data = await res.json();
    return data;
  }
  return serverSideProps(context, recapTaskFetchRequest);
}
