// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgJB_1_bB9KRKA5uB5t9-NEEg5EuFKl7g",
  authDomain: "encantio-5d93c.firebaseapp.com",
  projectId: "encantio-5d93c",
  storageBucket: "encantio-5d93c.appspot.com",
  messagingSenderId: "370945233622",
  appId: "1:370945233622:web:8107c78b778219bc6bef77",
  measurementId: "G-CN84EXEJXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app)

const analytics = getAnalytics(app);