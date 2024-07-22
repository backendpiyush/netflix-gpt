// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2_sf7vC9i8vWAIbyXcF2bWjJ7VavVD8I",
  authDomain: "netflixgpt-84ec5.firebaseapp.com",
  projectId: "netflixgpt-84ec5",
  storageBucket: "netflixgpt-84ec5.appspot.com",
  messagingSenderId: "104049098911",
  appId: "1:104049098911:web:f90b874a3ac27c8b4ae2aa",
  measurementId: "G-8LQD0XJJWT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
