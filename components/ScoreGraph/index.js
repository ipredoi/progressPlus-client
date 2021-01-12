import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Bar } from 'react-chartjs-2';
import {
  setBarBgColorArr,
  setBarBorColorArr,
} from '../../libs/functions/setChartColors';

//initial data to populate graph in case there is no data / gaps in data
let placeholderData = new Array(16).fill({
  week: 0,
  passedtests: 0,
  totaltests: 0,
  bootcamperuid: '',
  coachName: '',
  datesubmitted: '',
  duedate: '',
  feedbackdate: '',
  feedbackid: 0,
  qualitative: '',
  subject: '',
  type: '',
});

export default function ScoreGraph({
  setWeek,
  taskType,
  feedbackData,
  bootcamperName,
}) {
  // const graphData = placeholderData.map((object, index) => {
  //   return feedbackData[index] || object;
  // });

  //placeholderData will be replaced with real data for the weeks where there is data in DB

  if (feedbackData[0] !== undefined) {
    feedbackData.forEach((obj) => {
      placeholderData[obj.week - 1] = obj;
    });
  }

  let percentagesArr = [];
  let weeksArr = [];

  //sets percentages and weeks for the graph to use as data
  placeholderData.forEach((object, index) => {
    percentagesArr.push(
      Math.round((object.passedtests / object.totaltests) * 100)
    );
    weeksArr.push(index + 1);
  });

  let subjectArr = placeholderData.map((e) => {
    return e.subject;
  });

  // onclick event of bar chart, displays data for week selected
  function handleClick(event, elements) {
    if (elements[0] === undefined) {
      return 0;
    } else {
      const chart = elements[0]._chart;
      const element = chart.getElementAtEvent(event)[0];
      const dataset = chart.data.datasets[element._datasetIndex];
      const weekNum = chart.data.labels[element._index];
      const scorePercentage = dataset.data[element._index];
      const activeWeek = graphData.filter((obj) => {
        return obj.week === weekNum;
      });

      setWeek(activeWeek[0]);
    }
  }

  return (
    <div>
      {feedbackData[0] === undefined ? (
        <p>No data to display</p>
      ) : (
        <Bar
          data={{
            labels: weeksArr,
            datasets: [
              {
                label: bootcamperName
                  ? `${bootcamperName}`
                  : `${feedbackData[0].name}'s ${taskType} Task Score`,
                data: percentagesArr,
                backgroundColor: setBarBgColorArr(percentagesArr),
                borderColor: setBarBorColorArr(percentagesArr),
                borderWidth: 2,
              },
            ],
          }}
          width={600}
          height={400}
          options={{
            responsive: true,
            onClick: handleClick,
            maintainAspectRatio: true,
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
      )}
    </div>
  );
}
