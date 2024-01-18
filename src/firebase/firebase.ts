// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// ---- firestore ----
// import { getFirestore } from 'firebase/firestore/lite';
// // ---- firebase auth ----
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBlB3qgsRR0hKRbx6MxVBue79pJ_0Js5E",
  authDomain: "leetcode-clone-cbd81.firebaseapp.com",
  projectId: "leetcode-clone-cbd81",
  storageBucket: "leetcode-clone-cbd81.appspot.com",
  messagingSenderId: "54006947183",
  appId: "1:54006947183:web:795c9aa07e9a165bfb5c9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

export { app };