import { coachNavBarArr } from '../../../libs/globalVariables/navBarArrays';
import serverSideProps from '../../../libs/functions/serverSideProps';
import bootcamperNameReducer from '../../../libs/functions/bootcamperNameReducer';
import LoadingImg from '../../../components/LoadingImg';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import { Form, Select } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
// import styles from '../../../styles/''
import ScoreGraph from '../../../Components/ScoreGraph';
import {
  sortRecapData,
  sortMasteryData,
} from '../../../libs/functions/sortFeedbackData';

// Page for coaches to check bootcampers feedback/ progress and compare
export default function Progress({ session }) {
  const [bootcamperName, setBootcamperName] = useState('Name here');
  const [bootcampersArr, setBootcampersArr] = useState([]);
  const [bootcamperInfo, setBootcamperInfo] = useState([]);
  const [recapFeedbackData, setRecapFeedbackData] = useState([]);
  const [masteryFeedbackData, setMasteryFeedbackData] = useState([]);

  useEffect(() => {
    setRecapFeedbackData(sortRecapData(bootcamperName, session));
    setMasteryFeedbackData(sortMasteryData(bootcamperName, session));
  }, [bootcamperName]);

  useEffect(() => {
    setBootcamperInfo(session.data.data);
  }, [session]);

  useEffect(() => {
    let bootcampers = bootcamperInfo.map((bootcamper) => {
      return bootcamper.name;
    });
    //remove duplicates
    let bootcampersNames = bootcampers.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });
    let provisionalArray = bootcampersNames.reduce(bootcamperNameReducer, []);
    setBootcampersArr(provisionalArray);
  }, [bootcamperInfo]);

  if (!session) {
    return <LoadingImg />;
  }
  return (
    <div>
      <AppHeader session={session} navBarArr={coachNavBarArr} />
      <h2 className={styles.title}>Progress tracker</h2>
      <div className={styles.dropDown}>
        <Form className='form'>
          <Form.Group widths='equal'>
            <Form.Field
              control={Select}
              options={bootcampersArr}
              placeholder='Choose bootcamper'
              search
              searchInput={{ id: 'form-select-control-name' }}
              onChange={(e, data) => {
                setBootcamperName(data.value);
              }}
            />
          </Form.Group>
        </Form>
      </div>
      {/* <ProgressGraph
        feedbackData={feedbackData}
        bootcamperName={bootcamperName}
      /> */}
      <div className={styles.graphs}>
        <ScoreGraph
          feedbackData={recapFeedbackData}
          bootcamperName={bootcamperName}
        />
        <ScoreGraph
          feedbackData={masteryFeedbackData}
          bootcamperName={bootcamperName}
        />
      </div>
      <AppFooter />
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
