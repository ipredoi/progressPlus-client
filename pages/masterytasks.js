import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import NavBar from '../components/NavBar';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import serverSideProps from '../libs/functions/serverSideProps';
import LoadingImg from '../components/LoadingImg';
export default function MasteryTasks({ session }) {
  if (!session) {
    return <LoadingImg />;
  }
  return (
    <div>
      <header className='header'>
        <Avatar src={session.picture} name={session.name} />
        <NavBar linksAndTitles={bootcamperNavBarArr} />
        <button
          onClick={() => {
            console.log(session.data);
          }}>
          Testing data
        </button>
      </header>
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  async function masteryTaskFetchRequest(url, uid) {
    console.log(url, uid);
    const res = await fetch(`${url}feedback?type=mastery&uid=${uid}`);

    const data = await res.json();

    return data;
  }
  return serverSideProps(context, masteryTaskFetchRequest);
}

//function to get the feedback from the backend, may need some refactoring to have consistancy with variable names
