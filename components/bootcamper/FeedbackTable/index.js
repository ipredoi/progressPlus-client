import React from "react";
import { Table, Button, Form } from "semantic-ui-react";
import styles from "../../../styles/componentStyle/feedbackForm.module.css";

export default function FeedbackTable({ selectedData, bootcamperName }) {
  console.log(selectedData);
  const tableColumns = [
    "Week",
    "Subject",
    "Score",
    `Comments by ${selectedData.coachname}`,
    "Due Date",
    "Date Submitted",
    bootcamperName ? "Edit" : "Link",
  ];

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {tableColumns.map((header) => {
            return <Table.HeaderCell key={header}>{header}</Table.HeaderCell>;
          })}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>{selectedData.week}</Table.Cell>
          <Table.Cell>{selectedData.subject}</Table.Cell>
          <Table.Cell>
            {selectedData.passedtests === undefined
              ? ""
              : `${selectedData.passedtests}/${selectedData.totaltests}`}
          </Table.Cell>
          <Table.Cell>{selectedData.qualitative}</Table.Cell>
          <Table.Cell>{selectedData.duedate}</Table.Cell>
          <Table.Cell>{selectedData.datesubmitted}</Table.Cell>
          <Table.Cell>
            <Form.Field
              className={styles.editButton}
              control={Button}
              content='Edit'
              // onClick={submitFeedback}
            />
            <Form.Field
              className={styles.editButton}
              control={Button}
              content='Delete'
              // onClick={submitFeedback}
            />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
