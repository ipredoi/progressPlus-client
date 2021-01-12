const coachTableColArr = [
  "Week",
  "Subject",
  "Score",
  `Comments by ${selectedData.coachname}`,
  "Due Date",
  "Date Submitted",
  "Edit",
];

const bootcamperTableColArr = [
  "Week",
  "Subject",
  "Score",
  `Comments by ${selectedData.coachname}`,
  "Due Date",
  "Date Submitted",
];

export { coachTableColArr, bootcamperTableColArr };

// const coachTableColArr = [
//     selectedData.type === "mastery" ? "Subject" : "Week", // i don't like it...
//     "Score",
//     `Comments by ${selectedData.coachname}`,
//     "Due Date",
//     "Date Submitted",
//     "Edit",
//   ];

//   const bootcamperTableColArr = [
//     taskType === "Mastery" ? "Subject" : "Week",
//     "Score",
//     `Comments by ${selectedData.coachname}`,
//     "Due Date",
//     "Date Submitted",
//   ];
