import React, { useState, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import { quotesArray } from '../../libs/globalVariables/quotesArray';
// import 'pages/bootcamper/bootcamper.module.css';
import styles from './quote.module.css';

export default function QuoteHeader() {
  const [quote, setQuote] = useState('');
  useEffect(() => {
    const quoteIndex = Math.floor(Math.random() * quotesArray.length);
    setQuote(quotesArray[quoteIndex]);
  }, [quote]);

  return <Header className={styles.quoteHeader}>{quote}</Header>;
}
