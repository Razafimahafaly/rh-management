//src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

// informations de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAQ8PxxFdPlK3L7WnC9nDLTY3dLpZ20OnQ",
  authDomain: "rh-management-9adb0.firebaseapp.com",
  projectId: "rh-management-9adb0",
  storageBucket: "rh-management-9adb0.appspot.com",
  messagingSenderId: "183607390191",
  appId: "1:183607390191:web:b6928d1bb390be5216101a",
  measurementId: "G-LCL9BZ02BM"
};
//init firebase app
initializeApp(firebaseConfig);

//init services
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
};
