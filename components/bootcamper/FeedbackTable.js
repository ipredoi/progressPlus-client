import React from 'react';
import { Table } from 'semantic-ui-react';

const tableColumns = [
  'Week',
  'Score',
  'Comments by *insert coach name here*',
  'Due Date',
  'Date Submitted',
];

export default function FeedbackTable({ session, week }) {
  console.log('data fetch for table');
  // fetch data from backend
  let feedbackArr = session.data;
  console.log(feedbackArr);
  // let week = feedbackArr[week - 1];

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {tableColumns.map((header) => {
            return <Table.HeaderCell>{header}</Table.HeaderCell>;
          })}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>{week.week}</Table.Cell>
          <Table.Cell>
            {week.passedtests === undefined
              ? ''
              : `${week.passedtests}/${week.totaltests}`}
          </Table.Cell>
          <Table.Cell>{week.qualitative}</Table.Cell>
          <Table.Cell>{week.duedate}</Table.Cell>
          <Table.Cell>{week.datesubmitted}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
