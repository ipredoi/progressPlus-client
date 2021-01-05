import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Bar } from "react-chartjs-2";

export default function RecapGraph({ session }) {
  console.log("data fetch");
  // fetch data from backend

  let feedbackArr = session.data;
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

  // console.log(feedbackArr); // all feedback data from session uid
  // console.log(`weekArr: ${weekArr}`); // week array
  // console.log(`passedTestArr: ${passedTestArr}`); // passed score array
  // console.log(`totalTestArr: ${totalTestArr}`); // total score array
  // console.log(percentageArr);

  return (
    <div>
      <Bar
        data={{
          labels: weekArr,
          datasets: [
            {
              label: `${session.name}'s Martery task score [%]`, // name from login session
              data: percentageArr,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
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
