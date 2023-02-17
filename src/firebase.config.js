import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApGvIEIlF1BgcDF0WgNkjI_I0-zRxNC0c",
  authDomain: "sanju-whatsapp.firebaseapp.com",
  projectId: "sanju-whatsapp",
  storageBucket: "sanju-whatsapp.appspot.com",
  messagingSenderId: "679432269235",
  appId: "1:679432269235:web:ee7b0384f3152b36e46fc6",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const fireStore = getFirestore(app);

export { app, fireStore };
