import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAfitGDJgCGgjhbttkX-UNfj7WQwBJ6UY8",
    authDomain: "match-game-7f371.firebaseapp.com",
    databaseURL:
        "https://match-game-7f371-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "match-game-7f371",
    storageBucket: "match-game-7f371.appspot.com",
    messagingSenderId: "438363468579",
    appId: "1:438363468579:web:dd4a0950011ef0528b1296",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
