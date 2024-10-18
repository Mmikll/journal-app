// Import the functions you need from the SDKs you need
<<<<<<< HEAD
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

=======
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
const firebaseConfig = {
  apiKey: "AIzaSyD5IqIgeiwS3jMOep-9bjqw9fQsFqx_nYE",
  authDomain: "journal-app-15851.firebaseapp.com",
  projectId: "journal-app-15851",
  storageBucket: "journal-app-15851.appspot.com",
  messagingSenderId: "958706414686",
  appId: "1:958706414686:web:eebf93c92ddea0ba6c70cf"
};

<<<<<<< HEAD
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );
=======
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
