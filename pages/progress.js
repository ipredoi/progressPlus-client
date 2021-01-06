import { coachNavBarArr } from '../libs/globalvariables/navBarArrays';
import serverSideProps from '../libs/functions/serverSideProps';
import LoadingImg from '../components/LoadingImg';
import AppHeader from '../Components/AppHeader';
import AppFooter from '../Components/AppFooter';
import { Form, Select } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import ProgressGraph from '../components/coach/ProgressGraph';
import styles from '../styles/pagesStyle/progress.module.css';

// Page for coaches to check bootcampers feedback/ progress and compare
export default function Progress({ session }) {
  const [bootcamperName, setBootcamperName] = useState('Name here');
  const [bootcampersArr, setBootcampersArr] = useState([]);
  const [bootcamperInfo, setBootcamperInfo] = useState([]);
  console.log(session);
  //creates an array of bootcampers' names

  const bootcamperNameReducer = (acc, cur) => {
    return [
      ...acc,
      {
        key: cur.charAt(0).toLowerCase(),
        text: cur,
        value: cur,
      },
    ];
  };

  useEffect(() => {
    setBootcamperInfo(session.data.data);
  }, [session]);

  useEffect(() => {
    let bootcampersNames = bootcamperInfo.map((bootcamper) => {
      return bootcamper.name;
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
              placeholder='Name'
              search
              searchInput={{ id: 'form-select-control-name' }}
              onChange={setBootcamperName}
            />
          </Form.Group>
        </Form>
      </div>
      <ProgressGraph />
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
