import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Bar } from 'react-chartjs-2';
import {
  setBarBgColorArr,
  setBarBorColorArr,
} from '../../libs/functions/setChartColors';

const placeholderData = new Array(16).fill({
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
  const graphData = placeholderData.map((object, index) => {
    return feedbackData[index] || object;
  });

  // if (feedbackData[0] !== undefined) {
  //   feedbackData.forEach((obj) => {
  //     feedbackArr[obj.week - 1] = obj;
  //   });
  // }

  let passedTestArr = graphData.map((e) => {
    return e.passedtests;
  });
  let totalTestArr = graphData.map((e) => {
    return e.totaltests;
  });
  let percentageArr = passedTestArr.map((num, i) => {
    return Math.round((num / totalTestArr[i]) * 100);
  });

  // onclick event of bar chart
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
      // console.loglog(activeWeek);
    }
  }

  const weekArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div>
      {graphData[0] === undefined ? (
        <p>No data to display</p>
      ) : (
        <Bar
          data={{
            labels: weekArr,
            datasets: [
              {
                label: bootcamperName
                  ? `${bootcamperName}`
                  : `${feedbackData[0].name}'s ${taskType} Task Score`,
                data: percentageArr,
                backgroundColor: setBarBgColorArr(percentageArr),
                borderColor: setBarBorColorArr(percentageArr),
                borderWidth: 2,
              },
            ],
          }}
          width={600}
          height={400}
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
