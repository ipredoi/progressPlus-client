import React from 'react';
import '../styles/globals.css';
import { AuthContextProvider } from '../firebaseAuthUtils/useAuthContext';
import 'semantic-ui-css/semantic.min.css';
import { useRouter } from 'next/router';
import LoadingImg from '../Components/LoadingImg';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname !== '/' && pageProps.session === undefined) {
    return <LoadingImg />;
  } else
    return (
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    );
}
