// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB6zpapRAscUrHbMtT50wOyZJ0wMirWkjM",

    authDomain: "help-huddleston.firebaseapp.com",

    projectId: "help-huddleston",

    storageBucket: "help-huddleston.appspot.com",

    messagingSenderId: "192765888588",

    appId: "1:192765888588:web:937eb702d4ecfde3e7cce9"

  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}
