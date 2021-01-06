import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import NavBar from '../components/NavBar';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import serverSideProps from '../libs/functions/serverSideProps';
import LoadingImg from '../components/LoadingImg';
import AppHeader from '../Components/AppHeader';
import AppFooter from '../Components/AppFooter';

export default function RecapTasks({ session }) {
  if (!session) {
    return <LoadingImg />;
  }
  return (
    <div>
      <AppHeader session={session} />
      <AppFooter />
    </div>
  );
}
export async function getServerSideProps(context) {
  async function recapTaskFetchRequest(url, uid) {
    const res = await fetch(`${url}feedback?type=recap&uid=${uid}`);

    const data = await res.json();
    return data;
  }
  return serverSideProps(context, recapTaskFetchRequest);
}
