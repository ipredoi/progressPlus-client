const admin = require('firebase-admin');
const serviceAccount = require('../../ismail-esta-firebase-adminsdk-h6rzy-5190407b1c.json');

export const verifyIDToken = (token) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://ismail-esta-default-rtdb.firebaseio.com',
    });
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      console.log(error.message);
      throw error;
    });
};
