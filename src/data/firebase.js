// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfl_TPKrJyhjwMnFfhYGGjsurj0ZO3tMo",
  authDomain: "goldenyacht-720d1.firebaseapp.com",
  projectId: "goldenyacht-720d1",
  storageBucket: "goldenyacht-720d1.firebasestorage.app",
  messagingSenderId: "390296462067",
  appId: "1:390296462067:web:c078085636005035874d86",
  measurementId: "G-BDW2G5BXSH",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCfe1CXwRMyCQoBvOPVJ8UIl6Qr8s5LcaE",
//   authDomain: "goldenyacht-fc26a.firebaseapp.com",
//   projectId: "goldenyacht-fc26a",
//   storageBucket: "goldenyacht-fc26a.firebasestorage.app",
//   messagingSenderId: "463168084712",
//   appId: "1:463168084712:web:f2d4f90ab4d9c7883b875d",
//   measurementId: "G-WZ00G0X3C5",
// }

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
