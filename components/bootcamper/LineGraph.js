import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Line } from 'react-chartjs-2';

export default function LineGraph({ session }) {
  console.log('data fetch');
  // fetch data from backend

  let feedbackArr = session.data;
  let taskType =
    feedbackArr[0].type.charAt(0).toUpperCase() + feedbackArr[0].type.slice(1);
  // uppercase first letter
  let weekArr = feedbackArr.map((e) => {
    return e.week;
  });
  let passedTestArr = feedbackArr.map((e) => {
    return e.passedtests;
  });
  let totalTestArr = feedbackArr.map((e) => {
    return e.totaltests;
  });
  let percentageArr = passedTestArr.map((num, i) => {
    return (num / totalTestArr[i]) * 100;
  });

  return (
    <div>
      <Line
        data={{
          labels: weekArr,
          datasets: [
            {
              label: `${session.name}'s ${taskType} Task Score [%]`, // name from login session
              data: [20, 30, 50, 100, 70, 80, 60, 0, 70, 90],
              // data: percentageArr,
              backgroundColor: ['rgba(255, 159, 64, 0.2)'],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
            },
          ],
        }}
        width={600}
        height={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
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
