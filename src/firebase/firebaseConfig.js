
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey                :   "AIzaSyAfyHLCpp_r17N_jJl90YTQc_CeeQncP7g",
  authDomain            :   "info6129-lab4.firebaseapp.com",
  projectId             :   "info6129-lab4",
  storageBucket         :   "info6129-lab4.appspot.com",
  messagingSenderId     :   "75376040844",
  appId                 :   "1:75376040844:web:80cf09c610bdba94ff94a9"
  
};

// Initialize Firebase
const app = initializeApp( firebaseConfig )

// Initialize Cloud Firestore and get a reference  to the service
export const dbFS = getFirestore( app )