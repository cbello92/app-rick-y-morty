import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCJEV-JGNozLggFRnaP8uiHUYas8ggp5LQ",
    authDomain: "desarrollo-ec93c.firebaseapp.com",
    databaseURL: "https://desarrollo-ec93c.firebaseio.com",
    projectId: "desarrollo-ec93c",
    storageBucket: "desarrollo-ec93c.appspot.com",
    messagingSenderId: "575914997136",
    appId: "1:575914997136:web:84f6180de1aed9ebb7af15",
    measurementId: "G-5BQFYGKWN3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export function loginWithGoogle () {
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(snap => snap.user);
}