import React from 'react';
import { Header } from 'semantic-ui-react';
import { quotesArray } from '../libs/sample_data/codingQuotes';
import styles from '../styles/componentStyle/quoteHeader.module.css';

export default function QuoteHeader() {
  const quoteIndex = Math.floor(Math.random() * quotesArray.length);

  return (
    <Header as='h3' dividing className={styles.header}>
      {quotesArray[quoteIndex]}
    </Header>
  );
}
