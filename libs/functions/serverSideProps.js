import nookies from "nookies";
import { verifyIdToken } from "../../firebaseAuthUtils/firebaseAdmin";
import { backendUrl } from "../globalVariables/urls";

export default async function serverSideProps(context, customFetchRequest) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, picture } = token;
    const res = await fetch(`${backendUrl}${uid}`);
    const userData = await res.json();
    const { name } = userData.data[0];
    let data = "";
    if (customFetchRequest) {
      data = await customFetchRequest(backendUrl, uid);
      // console.log(data);
    }

    return {
      props: { session: { name, uid, picture, data } },
    };
  } catch (err) {
    // console.log(err);
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
    return { props: {} };
  }
}
