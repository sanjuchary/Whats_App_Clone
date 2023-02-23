import firebase  from "./firebase";
// import { initializeApp } from 'firebase/app';
// import { getFirestore, } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxvPyvIBMfc-3JuBNJkXxNOYMjIG7IiL4",
  authDomain: "whats-app-clone-aff06.firebaseapp.com",
  databaseURL: "https://whats-app-clone-aff06-default-rtdb.firebaseio.com",
  projectId: "whats-app-clone-aff06",
  storageBucket: "whats-app-clone-aff06.appspot.com",
  messagingSenderId: "3560197421",
  appId: "1:3560197421:web:47bf29f519a3350aabd7a4",
  measurementId: "G-ZE4FEE5J43"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;