//This page is basically Next.js' version of the HTML page

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' />
          <script
            src='https://kit.fontawesome.com/42a3c62954.js'
            crossOrigin='anonymous'
          />
        </Head>
        <body>
          <title>Progress Plus</title>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
