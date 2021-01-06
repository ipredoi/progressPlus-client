import Avatar from "../components/Avatar";
import UsefulLinks from "../components/UsefulLinks";
import NavBar from "../components/NavBar";
import { bootcamperNavBarArr } from "../libs/globalVariables/navBarArrays";
import serverSideProps from "../libs/functions/serverSideProps";
import LoadingImg from "../components/LoadingImg";

export default function RecapTasks({ session }) {
  console.log(`test: name:${session.name}, uid:${session.uid}`);

  if (!session) {
    return <LoadingImg />;
  }
  return (
    <div>
      <header className='header'>
        <Avatar src={session.picture} name={session.name} />
        <NavBar linksAndTitles={bootcamperNavBarArr} />
        <ScoreGraph session={session} />
        <FeedbackTable session={session} />
      </header>
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  async function fetchFeedbackData(url, uid) {
    const res = await fetch(`${url}feedback?uid=${uid}&type=recap`); // recap task score
    const { data } = await res.json();
    console.log(data);
    return data;
  }
  return serverSideProps(context, fetchFeedbackData);
}

//function to get the feedback from the backend, may need some refactoring to have consistancy with variable names
