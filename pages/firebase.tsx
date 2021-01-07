import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/messaging";
import "firebase/storage";
import "firebase/performance";

const firebaseConfig = {
    apiKey: "AIzaSyB0hYJdf0JCApXAx7V8UnfGoWneUDn1hTk",
    authDomain: "next-kazto-dev.firebaseapp.com",
    projectId: "next-kazto-dev",
    storageBucket: "next-kazto-dev.appspot.com",
    messagingSenderId: "1093411063581",
    appId: "1:1093411063581:web:c32d64644715d18f2843f4",
    measurementId: "G-K45G4Z0Q7D"
};

firebase.initializeApp(firebaseConfig);

firebase.performance();
firebase.auth().signInAnonymously();

export default firebase;