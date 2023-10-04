// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAttiaAGQwK34y_DR2DMiRmLB_BlSFafoA",
  authDomain: "projeto-prova-83e90.firebaseapp.com",
  projectId: "projeto-prova-83e90",
  storageBucket: "projeto-prova-83e90.appspot.com",
  messagingSenderId: "532286684039",
  appId: "1:532286684039:web:36ea364bfe7e09caf8b122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore();
export default db;
