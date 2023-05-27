import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDLeYjTxU1JXnt-BFrfIDiyFzax3jglWYc",
    authDomain: "medoblock-d04e0.firebaseapp.com",
    projectId: "medoblock-d04e0",
    storageBucket: "medoblock-d04e0.appspot.com",
    messagingSenderId: "775731276750",
    appId: "1:775731276750:web:e596a5d5aff5a0c18c999f",
    measurementId: "G-FNY9GF6MFY"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = getFirestore(app);
//export const storage = firebase.storage()