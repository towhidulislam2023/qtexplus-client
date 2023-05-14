// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgZVd0PvIuE2bUBjiBOeGNgFM7JQewNhY",
    authDomain: "qtexplus-doctor.firebaseapp.com",
    projectId: "qtexplus-doctor",
    storageBucket: "qtexplus-doctor.appspot.com",
    messagingSenderId: "135871474431",
    appId: "1:135871474431:web:2c355cf192bb5b7b3e3aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app