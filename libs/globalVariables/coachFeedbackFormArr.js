// in this file will generate an array with the bootcamp weeks
//this is used in the coaches feedback form in the feedbackForm component

let bootcampWeeks = new Array(16).fill().map((e, index) => {
  return { key: index + 1, text: index + 1, value: index + 1 };
});

// need to create an array for subject

let tasksTypes = ["mastery", "recap"]; //we can add more subjects if we need

// creating a reduce function

const tasksTypesReducer = (acc, cur) => {
  return [
    ...acc,
    {
      key: cur.charAt(0).toLowerCase(),
      text: `${cur.charAt(0).toUpperCase() + cur.slice(1)} Task`,
      value: cur,
    },
  ];
};

//aplying reducer to the tasksTypes array to obtain the input field array needed
let tasksArray = tasksTypes.reduce(tasksTypesReducer, []);
//// console.log(tasksArray);
export { bootcampWeeks, tasksArray };
