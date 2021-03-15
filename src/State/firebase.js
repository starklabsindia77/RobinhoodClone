import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrZjLVzQ-UkC1mGQoMC3vR8nAY5zabLNM",
  authDomain: "robinhood-clone-22a66.firebaseapp.com",
  databaseURL: "https://robinhood-clone-22a66-default-rtdb.firebaseio.com",
  projectId: "robinhood-clone-22a66",
  storageBucket: "robinhood-clone-22a66.appspot.com",
  messagingSenderId: "575682340714",
  appId: "1:575682340714:web:bcee72eb54c82f77696713",
  measurementId: "G-NZK481392R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
