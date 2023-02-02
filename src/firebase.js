// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzvWAePSUnxy8GezD2vRFNPzvYgKLyc2E",
  authDomain: "react-portfolio-dashboar-d4efa.firebaseapp.com",
  projectId: "react-portfolio-dashboar-d4efa",
  storageBucket: "react-portfolio-dashboar-d4efa.appspot.com",
  messagingSenderId: "58651304146",
  appId: "1:58651304146:web:867f682a45d3875f4d0d0b",
  measurementId: "G-P90FY6J86E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);