import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Bar } from "react-chartjs-2";
// import "chartjs-plugin-labels";
import {
  setBarBgColorArr,
  setBarBorColorArr,
  // setIconArr,
} from "../../libs/functions/setChartColors.js";
import { useAuthContext } from "../../firebaseUtils/useAuthContext.js";
import { GiCondorEmblem } from "react-icons/gi";
import { setSound } from "../../libs/functions/setSound.js";

//initial data to populate graph in case there is no data / gaps in data

export default function ScoreGraph({
  setSelectedData,
  taskType,
  feedbackData,
  bootcamperName,
  myName,
}) {
  //placeholderData will be replaced with real data for the weeks where there is data in DB
  // console.log(graphData);
  // if (feedbackData[0] !== undefined) {
  //   feedbackData.forEach((obj) => {
  //     placeholderData[obj.week - 1] = obj;
  //   });
  // }

  let percentagesArr = [];
  let xAxesArr = [];
  let averageArr = bootcamperName
    ? taskType === "Mastery"
      ? [80, 70, 70, 65, 85, 55, 60, 80, 90, 100, 85, 70, 65] // mastery task average score arr
      : [70, 50, 60, 30, 70, 80, 70, 50, 90, 100, 70, 85, 90] // recap task average score arr
    : []; // bootcamper average mockdata, only shown in coach side

  /* sets percentages and weeks for the graph to use as data
   for mastery tasks, x-axis array will be filled with subject name for both botcamper and coach sides */
  feedbackData.forEach((object, index) => {
    // object = object.slice(object.length - 1);
    percentagesArr.push(
      Math.round((object.passedtests / object.totaltests) * 100)
    );
    if (taskType === "Mastery") {
      xAxesArr = feedbackData.map((e) => {
        // return e.subject;
        return e.subject || "";
      });
    } else {
      xAxesArr.push(index + 1);
    }
  });

  /* onclick event of bar chart, displays data for week/subject selected */
  function handleClick(event, elements) {
    if (elements[0] === undefined) {
      return 0;
    } else {
      const chart = elements[0]._chart;
      const element = chart.getElementAtEvent(event)[0];
      const weekNum = chart.data.labels[element._index];
      const activeWeek = feedbackData.filter((obj) => {
        if (taskType === "Recap") {
          return obj.week === weekNum;
        } else return obj.subject === weekNum;
      });
      setSelectedData(activeWeek[0]);

      /* ↓↓↓ play sound when click the bar ↓↓↓ */
      const audio = new Audio(setSound(activeWeek[0]));
      audio.play();
      /* error occurs about using react hook */
      /* ↑↑↑ play sound when click the bar ↑↑↑ */
    }
  }

  return (
    <div>
      {feedbackData[0] === undefined && bootcamperName ? null : (
        <Bar
          data={{
            labels: xAxesArr,
            datasets: [
              {
                label: bootcamperName ? `${bootcamperName}` : ``,
                data: percentagesArr,
                backgroundColor: setBarBgColorArr(percentagesArr),
                borderColor: setBarBorColorArr(percentagesArr),
                borderWidth: 2,
                order: 2,
              },
              {
                label: "Average",
                data: averageArr,
                type: "line",
                fill: false,
                borderColor: "#d46c83",
                backgroundColor: "#d46c83",
                pointBorderColor: "#d46c83",
                pointBackgroundColor: "#d46c83",
                pointHoverBackgroundColor: "#d46c83",
                pointHoverBorderColor: "#d46c83",
                order: 1,
              },
            ],
          }}
          width={600}
          height={400}
          options={{
            /* ↓↓↓ icon on bar ↓↓↓ */
            // plugins: {
            //   labels: {
            //     render: "image",
            //     textMargin: 10,
            //     images: setIconArr(xAxesArr),
            //   },
            // },
            /* ↑↑↑ icon on bar ↑↑↑ */
            title: {
              display: true,
              text: bootcamperName ? `${taskType} Task` : ``,
            },
            legend: {
              display: bootcamperName ? true : false,
            },
            responsive: true,
            onClick: handleClick,
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  ticks: {
                    // maxTicksLimit: 16,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: taskType === "Mastery" ? "Subject" : "Week",
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
                    labelString: "Passed Tests [%]",
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
