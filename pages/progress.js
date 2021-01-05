import NavBar from '../components/NavBar';
import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import { coachNavBarArr } from '../libs/globalvariables/navBarArrays';
import ProgressButton from '../components/coach/ProgressButton';
import serverSideProps from '../libs/functions/serverSideProps';

// Page for coaches to check bootcampers feedback/ progress and compare

export default function Feedback({ session }) {
  const feedbackArray = session.data.data;

  return (
    <div>
      <header className="header">
        <Avatar src={session.picture} name={session.name} />
        <NavBar linksAndTitles={coachNavBarArr} />
      </header>
      <ProgressButton bootcampersArray={feedbackArray} />
      <div>
        <table>
          <thead>
            <tr>
              <th>Bootcamper</th>
              <th>Subject</th>
              <th>Week</th>
              <th>Task type</th>
              <th>Score</th>
              <th>Comments</th>
              <th>Date submitted</th>
              <th>Due date</th>
            </tr>
          </thead>

          {feedbackArray.map((feedbackData) => {
            return (
              <tr>
                <td>{feedbackData.bootcamperuuid}</td>
                <td>{feedbackData.subject}</td>
                <td>{feedbackData.week}</td>
                <td>{feedbackData.tasktype}</td>
                <td>{feedbackData.quantitative}</td>
                <td>{feedbackData.qualitative}</td>
                <td>{feedbackData.datesubmitted}</td>
                <td>{feedbackData.duedate}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <footer className="footer">
        <UsefulLinks />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  async function progressFetchRequest(url) {
    const res = await fetch(`${url}feedback`);
    //this is fetching info from our DB through the hosted backend URL. The URL variable is stored in globalVariables where it is also using dotenv to keep the URL private.
    const data = await res.json();
    return data;
  }
  return serverSideProps(context, progressFetchRequest);
}
