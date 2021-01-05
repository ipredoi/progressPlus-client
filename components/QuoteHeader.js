import React from 'react';
import { Header } from 'semantic-ui-react';
import { quotesArray } from '../libs/sample_data/codingQuotes';

export default function QuoteHeader() {
  const quoteIndex = Math.floor(Math.random() * quotesArray.length);

  return (
    <Header as='h3' dividing>
      {quotesArray[quoteIndex]}
    </Header>
  );
}
