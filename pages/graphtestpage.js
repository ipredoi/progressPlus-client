import RecapGraph from "../Components/bootcamper/RecapGraph";
import Avatar from "../components/avatar";
import UsefulLinks from "../components/usefulLinks";
import SignOut from "../components/signOut";
import BootcampterListLink from "../components/bootcamper/bootcamperListLink";
import nookies from "nookies";
import { verifyIdToken } from "../firebaseAuthUtils/firebaseAdmin";

export default function GraphTest({ session }) {
  console.log(`test: ${session.name}`);
  return (
    <div>
      <header className='header'>
        <SignOut />
        <Avatar />
        <BootcampterListLink />
      </header>
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
    const { uid, email, name, picture } = token;

    return {
      props: { session: { name, uid, email, picture } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return { props: {} };
  }
}
