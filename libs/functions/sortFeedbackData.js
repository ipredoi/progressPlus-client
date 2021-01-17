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

function sortRecapData(bootcamperName, session) {
  let allFeedback = session.data;
  console.log(allFeedback[0]);
  const individualFeedback = allFeedback.filter((feedbackObject) => {
    return feedbackObject.name === bootcamperName;
  });
  const recapFeedbackData = individualFeedback.filter((feedbackObject) => {
    return feedbackObject.type === 'recap';
  });
  return placeholderData.map((object, index) => {
    let data = recapFeedbackData.filter((obj) => obj.week === index + 1);
    return data[0] || object;
  });
}

function sortMasteryData(bootcamperName, session) {
  let allFeedback = session.data;
  console.log(allFeedback);
  const individualFeedback = allFeedback.filter((feedbackObject) => {
    return feedbackObject.name === bootcamperName;
  });
  let masteryFeedbackData = individualFeedback.filter((feedbackObject) => {
    return feedbackObject.type === 'mastery';
  });
  return placeholderData.map((object, index) => {
    let data = masteryFeedbackData.filter((obj) => obj.week === index + 1);
    return data[0] || object;
  });
}

export { sortRecapData, sortMasteryData };
