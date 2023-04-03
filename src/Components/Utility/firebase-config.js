import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyAD0Nspquxohy27vOT_oRCSRgJXb_OXQDY",
    authDomain: "attandenceapp-4084c.firebaseapp.com",
    databaseURL: "https://attandenceapp-4084c-default-rtdb.firebaseio.com",
    projectId: "attandenceapp-4084c",
    storageBucket: "attandenceapp-4084c.appspot.com",
    messagingSenderId: "108206634603",
    appId: "1:108206634603:web:946a685303cbfadfc6e32e",
    measurementId: "G-Q05RDTWDZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app)
const firebase = getFirestore(app)
export {db,firebase}