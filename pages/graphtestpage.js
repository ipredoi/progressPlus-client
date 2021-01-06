import RecapGraph from '../components/bootcamper/RecapGraph';
import Avatar from '../components/Avatar';
import UsefulLinks from '../components/UsefulLinks';
import LogOutButton from '../components/LogOutButton';
import NavBar from '../components/NavBar';
import { bootcamperNavBarArr } from '../libs/globalVariables/navBarArrays';
import serverSideProps from '../libs/functions/serverSideProps';
import AppHeader from '../Components/AppHeader';

export default function GraphTest({ session, data }) {
  console.log(`test: name:${session.name}, uid:${session.uid}`);
  return (
    <div>
      <AppHeader session={session} />
      <RecapGraph session={session} />
      <footer className='footer'>
        <UsefulLinks />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    console.log(token);
    const { uid, picture } = token;

    const res = await fetch(`${url}feedback?uid=${uid}&type=mastery`);
    // need to post <real-data> to feedback table in db
    const data = await res.json();
    console.log(data);

    return {
      props: { session: { uid, data } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    console.log(err.message);
    return { props: {} };
  }

  return serverSideProps(context, graphFetchRequest);
}
