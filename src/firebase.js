// import {getFirebase , firebase , initializeApp} from "./firebase";
import { initializeApp } from 'firebase/app';
import { getFirestore, } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAO1Im8U_KJBGumcGt29H1pP4ekVOSoMbM",
  authDomain: "whats-app-clone-343dd.firebaseapp.com",
  databaseURL: "https://whats-app-clone-343dd-default-rtdb.firebaseio.com",
  projectId: "whats-app-clone-343dd",
  storageBucket: "whats-app-clone-343dd.appspot.com",
  messagingSenderId: "637407589467",
  appId: "1:637407589467:web:0940ac32970dc06bf97b7e",
  measurementId: "G-FXS1MFLRFQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  // const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();

  // export {auth, provider};
  export default db;