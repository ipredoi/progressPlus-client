import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Bar } from "react-chartjs-2";

export default function RecapGraph({ session }) {
  console.log("data fetch");
  console.log(session.data.data[0].week); // data from feedback table for uid=d6587569589dk3r437890584gjfni
  // fetch data from backend
  return (
    <div>
      <Bar
        data={{
          labels: [
            `week${session.data.data[0].week}`,
            `week${session.data.data[1].week}`,
            `week${session.data.data[2].week}`,
            `week${session.data.data[3].week}`,
            `week${session.data.data[4].week}`,
            `week${session.data.data[5].week}`,
          ],
          datasets: [
            {
              label: `session.name's Recap task score [%]`, // name from login session
              data: [
                (session.data.data[0].passedtests /
                  session.data.data[0].totaltests) *
                  100,
                (session.data.data[1].passedtests /
                  session.data.data[1].totaltests) *
                  100,
                (session.data.data[2].passedtests /
                  session.data.data[2].totaltests) *
                  100,
                (session.data.data[3].passedtests /
                  session.data.data[3].totaltests) *
                  100,
                (session.data.data[4].passedtests /
                  session.data.data[4].totaltests) *
                  100,
                (session.data.data[5].passedtests /
                  session.data.data[5].totaltests) *
                  100,
              ],
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
            // {
            //   label: "Average [%]",
            //   data: [80, 60, 100, 50, 40, 70],
            //   backgroundColor: "lightgrey",
            //   borderColor: "grey",
            //   borderWidth: 1,
            // },
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
