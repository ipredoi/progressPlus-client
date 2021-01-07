import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import styles from '../../styles/componentStyle/progressGraph.module.css';

export default function ProgressGraph({ feedbackData, setWeek }) {
  const [feedbackArr, setFeedbackArr] = useState([]);

  console.log('data fetch');
  // fetch data from backend

  let percentageArr = [20, 30, 50, 100, 70, 80, 60, 10, 70, 90];
  let barBorColorArr = [];
  let barBgColorArr = [];

  percentageArr.map((e, i) => {
    if (e >= 80) {
      barBgColorArr[i] = 'rgba(255, 206, 86, 0.2)';
      barBorColorArr[i] = 'rgba(255, 159, 64, 1)';
    } else if (e < 40) {
      barBgColorArr[i] = 'rgba(255, 99, 132, 0.2)';
      barBorColorArr[i] = 'rgba(255, 99, 132, 1)';
    } else if (e >= 40 && e < 80) {
      barBgColorArr[i] = 'rgba(54, 162, 235, 0.2)';
      barBorColorArr[i] = 'rgba(54, 162, 235, 1)';
    }
  });

  // onclick event of bar chart
  function handleClick(event, elements) {
    const chart = elements[0]._chart;
    const element = chart.getElementAtEvent(event)[0];
    const dataset = chart.data.datasets[element._datasetIndex];
    const weekNum = chart.data.labels[element._index];
    const scorePercentage = dataset.data[element._index];
    setWeek(weekNum);
    // console.log(dataset.label + ' at ' + weekNum + ':' + scorePercentage);
  }

  return (
    <div className={styles.graphs}>
      <Bar
        data={{
          // labels: weekArr,
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          datasets: [
            {
              label: 'Recap tasks', // name from login session
              data: percentageArr,
              backgroundColor: barBgColorArr,
              borderColor: barBorColorArr,
              borderWidth: 2,
            },
          ],
        }}
        width={300}
        height={200}
        options={{
          responsive: true,
          onClick: handleClick,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                ticks: {
                  maxTicksLimit: 16,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  max: 100,
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
      <Bar
        data={{
          responsive: true,
          // labels: weekArr,
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          datasets: [
            {
              label: 'Mastery tasks', // name from login session
              data: percentageArr,
              backgroundColor: barBgColorArr,
              borderColor: barBorColorArr,
              borderWidth: 2,
            },
          ],
        }}
        width={300}
        height={200}
        options={{
          onClick: handleClick,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                ticks: {
                  maxTicksLimit: 16,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  max: 100,
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

// console.log(barBgColorArr);
// console.log(feedbackArr); // all feedback data from session uid
// console.log(taskType);
// console.log(`weekArr: ${weekArr}`); // week array
// console.log(`passedTestArr: ${passedTestArr}`); // passed score array
// console.log(`totalTestArr: ${totalTestArr}`); // total score array
// console.log(percentageArr);
