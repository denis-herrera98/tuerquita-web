import firebase from "firebase/app";

import "firebase/firestore";

const config = {
  apiKey: process.env.NEXT_PUBLIC_DB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_DB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_DB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_DB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_DB_MESSAGING_SENDERID,
  appId: process.env.NEXT_PUBLIC_DB_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_DB_MEASUREMENT_ID,
};

export default firebase;

export function initFirebase(): void {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}
