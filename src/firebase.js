// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBWIPGQ9jau-QPIaCIExb82nCKDr7fxCeA",
  authDomain: "register-202020.firebaseapp.com",
  projectId: "register-202020",
  storageBucket: "register-202020.firebasestorage.app",
  messagingSenderId: "630127975222",
  appId: "1:630127975222:web:90afd4a618ad7c4d81b197",
  measurementId: "G-DV3YW52JPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)