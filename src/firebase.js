// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4LUoEZUprTlvBDvD05FaxTZ54_X43dCw",
  authDomain: "disney-plus-clone-a7634.firebaseapp.com",
  projectId: "disney-plus-clone-a7634",
  storageBucket: "disney-plus-clone-a7634.appspot.com",
  messagingSenderId: "191557391328",
  appId: "1:191557391328:web:05ab14066343904d07d185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;