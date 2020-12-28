import React from 'react';
import '../styles/globals.css';
import { AuthContextProvider } from '../firebaseAuthUtils/useAuthContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />;
    </AuthContextProvider>
  );
}
