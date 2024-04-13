// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCKHkf6o8L9E5u1YjdvAoJqBzZAYufhGSs",
 authDomain: "rc-tutors-f8841.firebaseapp.com",
 projectId: "rc-tutors-f8841",
 storageBucket: "rc-tutors-f8841.appspot.com",
 messagingSenderId: "1004513724315",
 appId: "1:1004513724315:web:0dc1bae8526751e043433e",
 measurementId: "G-TTW1GP930T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialize Firebase Analytics
const auth = getAuth(app); // Initialize Firebase Authentication
const db = getFirestore(app); // Initialize Firestore

export  { auth, db };
