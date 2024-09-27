// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-bazaar-3b27e.firebaseapp.com",
  projectId: "car-bazaar-3b27e",
  storageBucket: "car-bazaar-3b27e.appspot.com",
  messagingSenderId: "812036640315",
  appId: "1:812036640315:web:f13d49ac86e9aa4f92961e",
  measurementId: "G-W3DVJHHH02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)