// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi9yzTSrWwkhRHNdQUJH5xYipYTv-pDUI",
  authDomain: "appbook-ffa40.firebaseapp.com",
  projectId: "appbook-ffa40",
  storageBucket: "appbook-ffa40.appspot.com",
  messagingSenderId: "929035028814",
  appId: "1:929035028814:web:f66130e62cdb7ff86ab61f",
  measurementId: "G-452FHLHXD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);