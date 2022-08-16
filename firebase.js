import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAsulOGAwv7kHRJjS21XvzyeSLEssRgEQ0",
    authDomain: "clone-be5e6.firebaseapp.com",
    projectId: "clone-be5e6",
    storageBucket: "clone-be5e6.appspot.com",
    messagingSenderId: "813828761239",
    appId: "1:813828761239:web:87569a6adebb2404a1abd2"
};

const app = !firebase.app.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;