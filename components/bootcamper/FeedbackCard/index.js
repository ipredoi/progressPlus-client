import React from "react";
import { Table } from "semantic-ui-react";

const tableColumns = [
  "Coach Name",
  "Date",
  "Subject",
  "Task Type",
  "Grade",
  "Feedback",
];

export default function FeedbackCard({ session }) {
  // console.log('data fetch for feedback cards');
  // fetch data from backend
  let feedbackArr = session.data;
  // console.log(feedbackArr);
  return (
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
}
