import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyD1wBl_03QaNWJnYcrp-7AUMCRZJs0yga0",
  authDomain: "t-commerce-e6a64.firebaseapp.com",
  projectId: "t-commerce-e6a64",
  storageBucket: "t-commerce-e6a64.appspot.com",
  messagingSenderId: "348412115347",
  appId: "1:348412115347:web:0eadd2559f6363253e9066",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
