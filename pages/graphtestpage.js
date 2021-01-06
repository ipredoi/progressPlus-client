import LineGraph from "../components/bootcamper/LineGraph";
import Avatar from "../components/Avatar";
import UsefulLinks from "../components/UsefulLinks";
import LogOutButton from "../components/LogOutButton";
import NavBar from "../components/NavBar";
import { bootcamperNavBarArr } from "../libs/globalVariables/navBarArrays";
import serverSideProps from "../libs/functions/serverSideProps";

export default function GraphTest({ session }) {
  console.log(`test: name:${session.name}, uid:${session.uid}`);
  return (
    <div>
      <header className='header'>
        <LogOutButton />
        <Avatar />
        <NavBar linksAndTitles={bootcamperNavBarArr} />
      </header>
      <LineGraph session={session} />
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
