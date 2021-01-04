//This page is basically Next.js' version of the HTML page

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
        </body>
      </Html>
    );
  }
}

export default MyDocument;
