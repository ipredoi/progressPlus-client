import React from 'react';
import { Table, Button, Form } from 'semantic-ui-react';
import styles from './feedbackTable.module.css';

export default function FeedbackTable({ selectedData, bootcamperName }) {
  // console.log(selectedData);
  const tableColumns = [
    'Week',
    'Subject',
    'Score',
    selectedData.coachname
      ? `Comments by ${selectedData.coachname}`
      : 'Comments',
    'Due Date',
    'Date Submitted',
  ];
  if (bootcamperName) {
    tableColumns.push('Edit');
  }

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
              ? ''
              : `${selectedData.passedtests}/${selectedData.totaltests}`}
          </Table.Cell>
          <Table.Cell>{selectedData.qualitative}</Table.Cell>
          <Table.Cell>
            {selectedData.duedate
              ? selectedData.duedate
                  .split("T")[0]
                  .replace(/(\d{4})[-/](\d{2})[-/](\d+)/, "$3/$2/$1")
              : null}
          </Table.Cell>
          <Table.Cell>
            {selectedData.datesubmitted
              ? selectedData.datesubmitted
                  .split("T")[0]
                  .replace(/(\d{4})[-/](\d{2})[-/](\d+)/, "$3/$2/$1")
              : null}
          </Table.Cell>
          {bootcamperName ? (
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
          ) : null}
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
