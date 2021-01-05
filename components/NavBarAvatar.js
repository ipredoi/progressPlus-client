import React, { useState } from 'react';
import Avatar from '../components/Avatar';
import nookies from 'nookies';
import { verifyIdToken } from '../firebaseAuthUtils/firebaseAdmin';

export default function NavBarAvatar({ session }) {
  return (
    <div>
      <img src={session.picture} alt='Profile Picture'></img>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    console.log(token);
    const { uid, email, name, picture } = token;

    const res = await fetch(`${url}feedback?uid=${uid}&type=recap`);
    const data = await res.json();

    return {
      props: { session: { name, uid, data, picture } },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    console.log(err.message);
    return { props: {} };
  }
}
