import Avatar from "../components/Avatar";
import UsefulLinks from "../components/UsefulLinks";
import NavBar from "../components/NavBar";
import ScoreGraph from "../components/bootcamper/ScoreGraph";
import FeedbackTable from "../components/bootcamper/FeedbackTable";
import { bootcamperNavBarArr } from "../libs/globalVariables/navBarArrays";
import serverSideProps from "../libs/functions/serverSideProps";

export default function MasteryTasks({ session }) {
  console.log(`test: name:${session.name}, uid:${session.uid}`);
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
    const res = await fetch(`${url}feedback?uid=${uid}&type=mastery`); // mastery task score
    const { data } = await res.json();
    console.log(data);
    return data;
  }
  return serverSideProps(context, fetchFeedbackData);
}

//function to get the feedback from the backend, may need some refactoring to have consistancy with variable names
