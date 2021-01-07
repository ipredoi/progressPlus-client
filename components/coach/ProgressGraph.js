import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Bar } from 'react-chartjs-2';
import styles from '../../styles/componentStyle/progressGraph.module.css';
import {
  setBarBgColorArr,
  setBarBorColorArr,
} from '../../libs/functions/setChartColors';

export default function ProgressGraph({ feedbackData }) {
  // // console.log("data fetch");
  // fetch data from backend
  // // console.log(feedbackData);
  // // console.log(bootcamperName);
  var tempMasteryFeedbackArr = feedbackData.filter((feedbackObject) => {
    return feedbackObject.type === 'mastery';
  });
  console.log(tempMasteryFeedbackArr);

  //create an array with for 16 weeks with empty objects
  //needs refactoring
  const masteryFeedback = new Array(16).fill({});

  if (tempMasteryFeedbackArr[0] !== undefined) {
    tempMasteryFeedbackArr.forEach((obj) => {
      masteryFeedback[obj.week - 1] = obj;
    });
  }
  let masteryPercentagesArr = masteryFeedback.map((object) =>
    Math.round((object.passedtests / object.totaltests) * 100)
  );
  console.log(masteryFeedback);

  /// recap array

  var tempRecapFeedbackArr = feedbackData.filter((feedbackObject) => {
    return feedbackObject.type === 'recap';
  });

  const recapFeedback = new Array(16).fill({});

  if (tempRecapFeedbackArr[0] !== undefined) {
    tempRecapFeedbackArr.forEach((obj) => {
      recapFeedback[obj.week - 1] = obj;
    });
  }

  console.log(tempRecapFeedbackArr);

  let recapPercentagesArr = recapFeedback.map((object) =>
    Math.round((object.passedtests / object.totaltests) * 100)
  );

  // // console.log(masteryPercentagesArr);
  // // console.log(recapPercentagesArr);

  return (
    <div className={styles.graphs}>
      <Bar
        data={{
          // labels: weekArr,
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          datasets: [
            {
              label: 'Recap tasks', // name from login session
              data: recapPercentagesArr,
              backgroundColor: setBarBgColorArr(recapPercentagesArr),
              borderColor: setBarBorColorArr(recapPercentagesArr),
              borderWidth: 2,
            },
          ],
        }}
        width={300}
        height={200}
        options={{
          responsive: true,
          // onClick: handleClick,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                ticks: {
                  maxTicksLimit: 16,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Week Number',
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  max: 100,
                  beginAtZero: true,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Passed Tests [%]',
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
              data: masteryPercentagesArr,
              backgroundColor: setBarBgColorArr(masteryPercentagesArr),
              borderColor: setBarBorColorArr(masteryPercentagesArr),
              borderWidth: 2,
            },
          ],
        }}
        width={300}
        height={200}
        options={{
          // onClick: handleClick,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                ticks: {
                  maxTicksLimit: 16,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Week Number',
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  max: 100,
                  beginAtZero: true,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Passed Tests [%]',
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

// // console.log(barBgColorArr);
// // console.log(feedbackArr); // all feedback data from session uid
// // console.log(taskType);
// // console.log(`weekArr: ${weekArr}`); // week array
// // console.log(`passedTestArr: ${passedTestArr}`); // passed score array
// // console.log(`totalTestArr: ${totalTestArr}`); // total score array
// // console.log(percentageArr);
