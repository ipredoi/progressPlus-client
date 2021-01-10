import FeedbackForm from '../components/FeedbackForm';
import { coachNavBarArr } from '../libs/globalVariables/navBarArrays';
import serverSideProps from '../libs/functions/serverSideProps';
import LoadingImg from '../components/LoadingImg';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import styles from '../styles/pagesStyle/feedback.module.css';
import { Button } from 'semantic-ui-react';

//page for coaches to submit feedback
export default function Feedback({ session }) {
  if (!session) {
    return <LoadingImg />;
  }
  return (
    <div className={styles.body}>
      <AppHeader
        session={session}
        navBarArr={coachNavBarArr}
        title={'WELCOME TO APP NAME'}
      />
      <div className={styles.feedbackForm}>
        <FeedbackForm
          className={styles.form}
          // bootcampersInfoArr={bootcampersInfoArr}
          session={session}
        />
     {/*    <Button
          className={styles.submitButton}
          content='Main Page'
          onClick={() => {
            router.push('./coach');
          }}
        /> */}
      </div>

      <AppFooter />
    </div>
  );
}
export async function getServerSideProps(context) {
  async function fetchBootcampersData(url) {
    const res = await fetch(`${url}`);
    const { data } = await res.json();
    return data;
  }
  return serverSideProps(context, fetchBootcampersData);
}
