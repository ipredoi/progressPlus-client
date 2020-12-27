import React from 'react';
import nookies from 'nookies';
import { verifyIDToken } from '../components/authentication/firebaseAdmin';
import firebaseClient from '../components/authentication/firebase';
import firebase from 'firebase/app';

export default function Authenticated({ session }) {
  firebaseClient();
  if (session) {
    return (
      <>
        <p>{session}</p>
        <button
          onClick={async () => {
            await firebase.auth().signOut();
            window.location.href = '/login';
          }}>
          Sign Out
        </button>
        ;
      </>
    );
  } else {
    return <p>Loading</p>;
  }
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIDToken(cookies.token);
    const { user } = token;
    return {
      props: { session: `Your uid is ${user}.` },
    };
  } catch (error) {
    console.log(error.message);
    // context.res.writeHead(302, { location: '/login' });
    // context.res.end();
    return { props: {} };
  }
}
