import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDmphjFEBRjjJTakqa7kCALbFI8FuZxHzg",
    authDomain: "netflix-clone-c4f67.firebaseapp.com",
    projectId: "netflix-clone-c4f67",
    storageBucket: "netflix-clone-c4f67.appspot.com",
    messagingSenderId: "362681905665",
    appId: "1:362681905665:web:198157011f44359dd2c600",
    measurementId: "G-3BF5MCZS2K"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app,auth};

export default db;