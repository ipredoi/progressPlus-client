import nookies from 'nookies';
import { verifyIdToken } from '../../firebaseAuthUtils/firebaseAdmin';
import { url } from '../globalVariables/backendUrl';

export default async function serverSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, picture } = token;
    const res = await fetch(`${url}${uid}`);
    const data = await res.json();
    const { name } = data.data[0];

    return {
      props: { session: { name, uid, picture } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return { props: {} };
  }
}
