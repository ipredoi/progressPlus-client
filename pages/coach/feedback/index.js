import FeedbackForm from '../../../components/coach/FeedbackForm';
import { coachNavBarArr } from '../../../libs/globalVariables/navBarArrays';
import serverSideProps from '../../../libs/functions/serverSideProps';
import LoadingImg from '../../../components/LoadingImg';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import styles from './feedback.module.css';

//page for coaches to submit feedback
export default function Feedback({ session }) {
  if (!session) {
    return <LoadingImg />;
  }
  return (
    <div className={styles.body}>
      <AppHeader session={session} navBarArr={coachNavBarArr} />
      <div className={styles.feedbackForm}>
        <FeedbackForm className={styles.form} session={session} />
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
