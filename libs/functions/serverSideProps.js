import nookies from 'nookies';
import { verifyIdToken } from '../../firebaseAuthUtils/firebaseAdmin';
import { url } from '../globalVariables/backendUrl';

export default async function serverSideProps(context, customFetchRequest) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, picture } = token;
    const res = await fetch(`${url}${uid}`);
    const userData = await res.json();
    const { name } = userData.data[0];
    let data;
    if (customFetchRequest) {
      data = customFetchRequest();
    }

    return {
      props: { session: { name, uid, picture, data } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return { props: {} };
  }
}
