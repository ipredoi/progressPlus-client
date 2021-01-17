import { coachNavBarArr } from '../../libs/globalVariables/navBarArrays';
import { Form, Select } from 'semantic-ui-react';
import { useEffect, useReducer } from 'react';
import serverSideProps from '../../libs/functions/serverSideProps';
import AppHeader from '../../components/AppHeader';
import styles from './progress.module.css';
import ScoreGraph from '../../components/ScoreGraph';
import FeedbackTable from '../../components/bootcamper/FeedbackTable';
import useGraphSelect from '../../libs/customHooks/useGraphSelect';

const initialState = {
  bootcamperName: 'Name here',
  bootcampersArr: [],
  recapFeedbackData: [],
  masteryFeedbackData: [],
  selectedData: {},
};
// Page for coaches to check bootcampers feedback/ progress and compare
export default function Progress({ session }) {
  const [state, dispatch] = useReducer(useGraphSelect, initialState);
  /* ↓↓↓ average score calculate ↓↓↓ */
  // let allData = session.data.data;
  // let filteredData = [];
  // for (let i = 1; i < 17; i++) {
  //   filteredData = allData
  //     .filter((obj) => {
  //       return obj.type === "recap" && obj.week === i;
  //     })
  //     .map((e) => {
  //       return e.passedtests;
  //     });
  // }
  // console.log(filteredData);

  // console.log(session.data.data);
  // const [averageArr, setAverageArr] = useState([]);
  // setAverageArr(
  //   session.data.data
  //     .map((e) => {
  //       return e.passedtests;
  //     })
  //     .filter((e) => {
  //       return e.type === "recap" && e.week === 4;
  //     })
  // );
  // console.log(averageArr);

  /* ↑↑↑ average score calculate ↑↑↑ */

  //sets bootcamper names for the dropdown menu and removes duplicates
  useEffect(() => {
    if (session.data.data) {
      let payload = session.data.data;
      dispatch({ type: 'new session', payload: payload });
      session;
    }
  }, []);
  return (
    <div>
      <AppHeader session={session} navBarArr={coachNavBarArr} />
      <div className={styles.container}>
        <h2 className={styles.title}>Progress tracker</h2>
        <div className={styles.dropDown}>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                control={Select}
                options={state.bootcampersArr}
                placeholder="Bootcampers"
                search
                searchInput={{ id: 'form-select-control-name' }}
                onChange={(e, data) => {
                  dispatch({
                    type: 'name selected',
                    payload: { session: session, bootcamperName: data.value },
                  });
                }}
              />
            </Form.Group>
          </Form>
        </div>
        {state.bootcamperName === 'Name here' ? (
          <p className={styles.noDataText}>
            Choose a Bootcamper to view their data
          </p>
        ) : null}

        <div className={styles.graphs}>
          <div className={styles.graph}>
            <ScoreGraph
              feedbackData={state.masteryFeedbackData}
              bootcamperName={state.bootcamperName}
              taskType={'Mastery'}
              setSelectedData={(object) =>
                dispatch({
                  type: 'week selected',
                  payload: object,
                })
              }
            />
          </div>
          <div className={styles.graph}>
            <ScoreGraph
              feedbackData={state.recapFeedbackData}
              bootcamperName={state.bootcamperName}
              taskType={'Recap'}
              setSelectedData={(object) =>
                dispatch({
                  type: 'week selected',
                  payload: object,
                })
              }
            />
          </div>
        </div>
        <div className={styles.table}>
          <FeedbackTable
            selectedData={state.selectedData}
            bootcamperName={state.bootcamperName}
          />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  async function progressFetchRequest(url, uid, token) {
    const res = await fetch(`${url}feedback`, {
      headers: { authorization: `Bearer ${token}` },
    });
    //this is fetching info from our DB through the hosted backend URL. The URL variable is stored in globalVariables where it is also using dotenv to keep the URL private.
    const data = await res.json();
    return data;
  }
  return serverSideProps(context, progressFetchRequest);
}
