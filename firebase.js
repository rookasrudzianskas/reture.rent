import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_NqCbdYXXcXBN_EaVfyoTnogk6KxaBfA",
    authDomain: "renture-rent.firebaseapp.com",
    projectId: "renture-rent",
    storageBucket: "renture-rent.appspot.com",
    messagingSenderId: "550651841061",
    appId: "1:550651841061:web:58fe4b61afae3f834d4dcc",
    measurementId: "G-4T18QCSYBB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;

