const envData = {
    firebase: {
      apiKey: process.env.FIREBASE_API_KEY?.trim(),
      authDomain: process.env.FIREBASE_AUTH_DOMAIN?.trim(),
      projectId: process.env.FIREBASE_PROJECT_ID?.trim(),
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET?.trim(),
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID?.trim(),
      appId: process.env.FIREBASE_APP_ID?.trim(),
      measurementId: process.env.FIREBASE_MEASUREMENT_ID?.trim(),
    },
    baseURL: process.env.BASE_URL,
  };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLeYjTxU1JXnt-BFrfIDiyFzax3jglWYc",
    authDomain: "medoblock-d04e0.firebaseapp.com",
    projectId: "medoblock-d04e0",
    storageBucket: "medoblock-d04e0.appspot.com",
    messagingSenderId: "775731276750",
    appId: "1:775731276750:web:e596a5d5aff5a0c18c999f",
    measurementId: "G-FNY9GF6MFY"
  };
  
  export default {envData, firebaseConfig};