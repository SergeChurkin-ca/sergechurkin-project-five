import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvmOCITwc2n7AfUZxmsvSg3Oh9vxiB6BM",
    authDomain: "tours-inventory.firebaseapp.com",
    databaseURL: "https://tours-inventory.firebaseio.com",
    projectId: "tours-inventory",
    storageBucket: "tours-inventory.appspot.com",
    messagingSenderId: "227516769907",
    appId: "1:227516769907:web:63ecc0d66b794542512c06",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;