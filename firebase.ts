import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDibKkhLSvgZzuTn0yAZE2TGI8vW6piFRk",
  authDomain: "chatgpt-clone-d7a04.firebaseapp.com",
  projectId: "chatgpt-clone-d7a04",
  storageBucket: "chatgpt-clone-d7a04.appspot.com",
  messagingSenderId: "525861598738",
  appId: "1:525861598738:web:92d496c003b0cbd44fcacb",
  measurementId: "G-X38VLB3CP6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };