import { backendUrl } from '../globalVariables/urls';

//function to post the new user to the DB, to be used on registration page
export default function registerUser(e, userData, session, setSubmit) {
  e.preventDefault();
  if ((userData.role !== '') & (userData.cohort !== '')) {
    fetch(`${backendUrl}`, {
      method: 'POST',
      body: JSON.stringify({
        role: userData.role,
        uid: session.uid, // ❗usinng a hardcoded string for testing ... to be repalced with session.uid
        cohort: userData.cohort,
        name: session.name !== 'No name' ? session.name : userData.name, //if session.name does not contain a name, user inputted name will be posted
      }),
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
    }).then((response) => response.json());
    setSubmit(true);
    // .then((data) => console.log(data));
    // console.log("handlesubmit working");
    // redirecting the user to coach/ bootcamper page after submit
  } else {
    alert('Please fill all the required fields');
  }
}
