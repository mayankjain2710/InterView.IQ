import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aimockinterview-9c288.firebaseapp.com",
  projectId: "aimockinterview-9c288",
  storageBucket: "aimockinterview-9c288.firebasestorage.app",
  messagingSenderId: "974391480230",
  appId: "1:974391480230:web:e9631ab5224499df784967"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider}