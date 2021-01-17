import { backendUrl } from '../../globalVariables/urls';

export default async function registerUser(
  values,
  token,
  setServerErr,
  setPostSuccessful
) {
  try {
    await fetch(`${backendUrl}`, {
      method: 'POST',
      body: JSON.stringify({
        role: values.role,
        uid:"test1"/*  values.uid */,
        cohort: values.cohort,
        name: `${values.forename} ${values.surname}`,
      }),
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        authorization: `Bearer ${token}`,
      },
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPostSuccessful(true);
      });
    console.log('handlesubmit working');
    // redirecting the user to coach/ bootcamper page after submit
  } catch (err) {
    console.error('Server error', err);
    setServerErr(`Server error: ${err.message}. Please try again!`);
  }
}
