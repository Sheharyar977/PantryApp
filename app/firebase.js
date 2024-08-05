// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb5SoHjFxlDcJNB8aIzsllDDhgB61KaCg",
  authDomain: "hspantryapp-27021.firebaseapp.com",
  projectId: "hspantryapp-27021",
  storageBucket: "hspantryapp-27021.appspot.com",
  messagingSenderId: "347565854751",
  appId: "1:347565854751:web:2fbde27e1c630dce5b452a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);