import React from 'react';
import serverSideProps from '../../libs/functions/serverSideProps';
import LandingPage from '../../components/LandingPage/LandingPage';
import CoachDashboard from '../../components/coach/CoachDashboard';
import { coachNavBarArr } from '../../libs/globalVariables/navBarArrays';

export default function Coach({ session }) {
  return (
    <LandingPage
      session={session}
      navBarArray={coachNavBarArr}
      Dashboard={CoachDashboard}
    />
  );
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
