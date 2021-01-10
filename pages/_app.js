import { React } from 'react';
import '../styles/globals.css';
import { AuthContextProvider } from '../firebaseAuthUtils/useAuthContext';
import 'semantic-ui-css/semantic.min.css';

export default function MyApp({ Component, pageProps, session }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
