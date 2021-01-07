import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Bar } from 'react-chartjs-2';

export default function ScoreGraph({ session, setWeek, taskType }) {
  console.log('data fetch');
  // fetch data from backend

  let tempArray = session.data;

  const feedbackArr = new Array(16).fill({
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

  if (tempArray[0] !== undefined) {
    tempArray.forEach((obj) => {
      feedbackArr[obj.week - 1] = obj;
    });
  }

  let passedTestArr = feedbackArr.map((e) => {
    return e.passedtests;
  });
  let totalTestArr = feedbackArr.map((e) => {
    return e.totaltests;
  });
  let percentageArr = passedTestArr.map((num, i) => {
    return (num / totalTestArr[i]) * 100;
  });

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
    if (elements[0] === undefined) {
      return 0;
    } else {
      const chart = elements[0]._chart;
      const element = chart.getElementAtEvent(event)[0];
      const dataset = chart.data.datasets[element._datasetIndex];
      const weekNum = chart.data.labels[element._index];
      const scorePercentage = dataset.data[element._index];
      const activeWeek = feedbackArr.filter((obj) => {
        return obj.week === weekNum;
      });

      setWeek(activeWeek[0]);
      console.log(activeWeek);
    }
  }
  const weekArr = feedbackArr.map((object) => object.week);
  return (
    <div>
      {feedbackArr[0] === undefined ? (
        <p>No data to display</p>
      ) : (
        <Bar
          data={{
            labels: { weekArr },
            datasets: [
              {
                label: `${session.name}'s ${taskType} Task Score [%]`, // name from login session
                data: percentageArr,
                backgroundColor: barBgColorArr,
                borderColor: barBorColorArr,
                borderWidth: 2,
              },
            ],
          }}
          width={600}
          height={400}
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
      )}
    </div>
  );
}
