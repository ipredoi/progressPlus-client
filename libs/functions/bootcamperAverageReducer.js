// creating a reduce function to calculate average score and push it into array eg. [{key: 1}]

export default function bootcamperAverageReducer(acc, cur, index) {
  return [
    ...acc,
    {
      cur,
    },
  ];
}
