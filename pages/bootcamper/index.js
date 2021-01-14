import React from 'react';
import serverSideProps from '../../libs/functions/serverSideProps';
import LandingPage from '../../components/LandingPage/LandingPage';
import BootcamperDashboard from '../../components/bootcamper/BootcamperDashboard';
import { bootcamperNavBarArr } from '../../libs/globalVariables/navBarArrays';

export default function Bootcamper({ session }) {
  return (
    <LandingPage
      session={session}
      navBarArray={bootcamperNavBarArr}
      Dashboard={BootcamperDashboard}
    />
  );
}

export async function getServerSideProps(context) {
  return serverSideProps(context);
}
