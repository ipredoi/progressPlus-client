//function to get the feedback from the backend, may need some refactoring to have consistancy with variable names

async function getFeedback(url = 'http://localhost/5000', id, taskType) {
  const result = await fetch(`${url}/feedback/${uuid}/${taskType}`);
  const data = await result.json();
  console.log(data);
}

export default getFeedback;
