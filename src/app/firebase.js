// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHjCaAsfmJ-ytczFQh2MnqNlP64NFEp6k",
  authDomain: "kuryxflix.firebaseapp.com",
  projectId: "kuryxflix",
  storageBucket: "kuryxflix.appspot.com",
  messagingSenderId: "471829835770",
  appId: "1:471829835770:web:e8c18c94f2c086e6c5be43",
  measurementId: "G-08VWTTVY8G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);