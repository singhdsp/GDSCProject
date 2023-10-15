// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkSuiUySemVqLGZNXD58cMRWxZ45qrJXk",
  authDomain: "gdsc-ajayp.firebaseapp.com",
  projectId: "gdsc-ajayp",
  storageBucket: "gdsc-ajayp.appspot.com",
  messagingSenderId: "550111276557",
  appId: "1:550111276557:web:2158f3ce064973fca7ef44",
  measurementId: "G-01WPQY1DND"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
