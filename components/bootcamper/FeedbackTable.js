import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

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
  let activeArr = feedbackArr[week - 1];

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
          <Table.Cell>{week}</Table.Cell>
          <Table.Cell>{`${activeArr.passedtests}/${activeArr.totaltests}`}</Table.Cell>
          <Table.Cell>{activeArr.qualitative}</Table.Cell>
          <Table.Cell>{activeArr.duedate}</Table.Cell>
          <Table.Cell>{activeArr.datesubmitted}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
