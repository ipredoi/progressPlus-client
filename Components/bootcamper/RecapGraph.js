import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Bar, Line } from "react-chartjs-2";

export default function RecapGraph({ session }) {
  console.log("data fetch");
  console.log(session.data.data[0].week); // data from feedback table for uid=d6587569589dk3r437890584gjfni
  // fetch data from backend
  return (
    <div>
      <Bar
        data={{
          labels: ["week10", "week11", "week12", "week13", "week14", "week15"],
          datasets: [
            {
              label: `${session.name}'s Recap task score`, // name from login session
              data: [session.data.data[0].week, 50, 70, 54, 30, 25],
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
            {
              label: "Average",
              data: [47, 52, 67, 50, 40, 20],
              backgroundColor: "lightgrey",
              borderColor: "grey",
              borderWidth: 1,
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
