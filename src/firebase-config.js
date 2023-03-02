
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxeiTIzFR-lOeIVD9lA4uo4vQ9jQpr3yM",
  authDomain: "shoebox-9360b.firebaseapp.com",
  projectId: "shoebox-9360b",
  storageBucket: "shoebox-9360b.appspot.com",
  messagingSenderId: "780027575488",
  appId: "1:780027575488:web:900600cb5c611fea770125",
  measurementId: "G-ZXCV5J79C2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const Provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth,Provider).then((result)=>{
        console.log(result);
        localStorage.setItem('username',result.user.displayName);
        localStorage.setItem('photoURL',result.user.photoURL);
        window.open("/collection");

    }).catch((error) => {
        console.log(error);
    });
}

export const signOut = () =>{
    auth.signOut();
}