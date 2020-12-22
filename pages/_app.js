// import 'firebaseui/dist/firebaseui.css';
import { AuthProvider } from '../Components/authentication/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default MyApp;

//The <Component {...pageProps} /> part represents individual pages. When you navigate between different pages of your website, only the children data of <Component {...pageProps} /> changes.
