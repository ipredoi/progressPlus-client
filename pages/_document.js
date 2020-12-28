import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='icon' type='image/x-icon' href='/public/favicon.ico' />
        </Head>
        <body>
          <title>School of Code</title>
          <Main />
          <NextScript />
          {/* <!-- Firebase App (the core Firebase SDK) is always required and must be listed first --> */}
          <script src='/__/firebase/8.2.1/firebase-app.js'></script>

          {/* <!-- Add Firebase products that you want to use --> */}
          <script src='/__/firebase/8.2.1/firebase-auth.js'></script>
          <script src='/__/firebase/8.2.1/firebase-firestore.js'></script>

          <script src='/__/firebase/init.js'></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
