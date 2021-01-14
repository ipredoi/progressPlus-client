import React, { useState, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import { quotesArray } from '../../libs/globalVariables/quotesArray';

export default function QuoteHeader() {
  const [quote, setQuote] = useState('');
  useEffect(() => {
    const quoteIndex = Math.floor(Math.random() * quotesArray.length);
    setQuote(quotesArray[quoteIndex]);
  }, [quote]);

  return <Header class='quote-header'>{quote}</Header>;
}
