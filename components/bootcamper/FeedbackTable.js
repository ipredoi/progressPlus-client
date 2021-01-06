import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

const tableColumns = [
  'Coach Name',
  'Date',
  'Subject',
  'Task Type',
  'Grade',
  'Feedback',
];

export default function FeedbackTable({ session, week, setWeek }) {
  console.log('data fetch for table');
  // fetch data from backend
  let feedbackArr = session.data;
  console.log(feedbackArr);
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>First</Label>
          </Table.Cell>
          <Table.Cell>ggg</Table.Cell>
          <Table.Cell>Celfffl</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
