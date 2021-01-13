import FeedbackForm from "../../../components/coach/FeedbackForm/index";
import { coachNavBarArr } from "../../../libs/globalVariables/navBarArrays";
import serverSideProps from "../../../libs/functions/serverSideProps";
import AppHeader from "../../../components/AppHeader";
import styles from "./feedback.module.css";

//page for coaches to submit feedback
export default function Feedback({ session }) {
  return (
    <div className={styles.body}>
      <AppHeader session={session} navBarArr={coachNavBarArr} />
      <div className={styles.feedbackForm}>
        <FeedbackForm className={styles.form} session={session} />
      </div>
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
