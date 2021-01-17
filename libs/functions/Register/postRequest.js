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
        uid: values.uid,
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
        // redirecting the user to coach/ bootcamper page after submit
        if (data.success) {
          window.location.href = `/${data.data[0].role.toLowerCase()}`;
        }

        setPostSuccessful(true);
      });
    console.log('handlesubmit working');
  } catch (err) {
    console.error('Server error', err);
    setServerErr(`Server error: ${err.message}. Please try again!`);
  }
}
