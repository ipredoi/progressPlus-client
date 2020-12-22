import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* <!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services --> */}

          {/* <!-- Firebase App (the core Firebase SDK) is always required and must be listed first --> */}
          <script src='/__/firebase/8.2.1/firebase-app.js'></script>

          {/* <!-- Add Firebase products that you want to use --> */}
          <script src='/__/firebase/8.2.1/firebase-auth.js'></script>
          <script src='/__/firebase/8.2.1/firebase-firestore.js'></script>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
