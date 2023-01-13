import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJJg1KzsMPtzAkgudjkbEqLZbgym7qKtM",
  authDomain: "notes-b3c87.firebaseapp.com",
  projectId: "notes-b3c87",
  storageBucket: "notes-b3c87.appspot.com",
  messagingSenderId: "1062256288970",
  appId: "1:1062256288970:web:bac81d15cebc3e95c48033",
  measurementId: "G-DP7WLHTKGZ"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };