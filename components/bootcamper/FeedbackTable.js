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

const FeedbackTable = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        {tableColumns.map((columnName) => {
          <Table.HeaderCell>{columnName}</Table.HeaderCell>;
        })}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        {tableColumns.map(() => {
          <Table.Cell></Table.Cell>;
        })}
      </Table.Row>
      <Table.Row>
        {tableColumns.map(() => {
          <Table.Cell></Table.Cell>;
        })}
      </Table.Row>
      <Table.Row>
        {tableColumns.map(() => {
          <Table.Cell></Table.Cell>;
        })}
      </Table.Row>
    </Table.Body>
  </Table>
);

export default FeedbackTable;
