// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM8hUlkEbJtYfNrRNPs8V9QIWRrNF_Te4",
  authDomain: "ecommerce-coderhouse-c2d2b.firebaseapp.com",
  projectId: "ecommerce-coderhouse-c2d2b",
  storageBucket: "ecommerce-coderhouse-c2d2b.appspot.com",
  messagingSenderId: "1087334292946",
  appId: "1:1087334292946:web:ca77b57507407cffc3fc0b",
  measurementId: "G-LERPSEVERJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Google Analytics
const analytics = getAnalytics(app);

// Authentication
export const auth = getAuth(app);

// Firestore
export const db = getFirestore(app)

