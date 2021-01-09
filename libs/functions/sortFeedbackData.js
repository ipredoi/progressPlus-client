function sortRecapData(bootcamperName, session) {
  let allFeedback = session.data.data;
  const individualFeedback = allFeedback.filter((feedbackObject) => {
    return feedbackObject.name === bootcamperName;
  });
  return individualFeedback.filter((feedbackObject) => {
    return feedbackObject.type === 'recap';
  });
}

function sortMasteryData(bootcamperName, session) {
  let allFeedback = session.data.data;
  const individualFeedback = allFeedback.filter((feedbackObject) => {
    return feedbackObject.name === bootcamperName;
  });
  return individualFeedback.filter((feedbackObject) => {
    return feedbackObject.type === 'mastery';
  });
}

export { sortRecapData, sortMasteryData };
