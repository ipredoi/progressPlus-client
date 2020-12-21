import React from 'react';
import 'firebase/auth';

export default function FirebaseConfig() {
  var firebaseConfig = {
    apiKey: process.env.NEXT_APP_API_KEY,
    authDomain: process.env.NEXT_APP_AUTH_DOMAIN,
    projectId: process.env.NEXT_APP_PROJECT_ID,
    storageBucket: process.env.NEXT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_APP_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_APP_APP_ID,
  };

  firebase.initializeApp(firebaseConfig);

  return (
    <div>
      <script src='https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js'></script>
    </div>
  );
}
