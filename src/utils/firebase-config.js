// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg0Nb6srJYfl9ceitCiToPnDBRKWQTXqE",
  authDomain: "react-netflix-clone-59677.firebaseapp.com",
  projectId: "react-netflix-clone-59677",
  storageBucket: "react-netflix-clone-59677.appspot.com",
  messagingSenderId: "790483742172",
  appId: "1:790483742172:web:597a00afa77919f3303319",
  measurementId: "G-28EPPC537J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);