import { backendUrl } from '../../globalVariables/urls';

export default function registerUser(values, token) {
  if (
    (values.role !== '') &
    /*  (values.cohort !== '') & */
    (values.forename !== '') &
    (values.surname !== '')
  ) {
    fetch(`${backendUrl}`, {
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
      .then((data) => console.log(data));
    console.log('handlesubmit working');
    // redirecting the user to coach/ bootcamper page after submit
    console.log({
      role: values.role,
      uid: values.uid,
      cohort: values.cohort,
      name: `${values.forename} ${values.surname}`,
    });
  }
}
