// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtQUtBNV3qTNTcKnzZzx3zLyhljkvUdrU",
  authDomain: "projeto-instagram-cf12d.firebaseapp.com",
  projectId: "projeto-instagram-cf12d",
  storageBucket: "projeto-instagram-cf12d.appspot.com",
  messagingSenderId: "240055130897",
  appId: "1:240055130897:web:d8b3727f64cb10b8b9cab0",
  measurementId: "G-4LXP13CDEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);