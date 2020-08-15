import firebase from 'firebase/app'
import 'firebase/auth'
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwRcroF0H5Q5ywWO2VoAM6I4S8MHMOiWM",
  authDomain: "posty-e7494.firebaseapp.com",
  databaseURL: "https://posty-e7494.firebaseio.com",
  projectId: "posty-e7494",
  storageBucket: "posty-e7494.appspot.com",
  messagingSenderId: "865945887382",
  appId: "1:865945887382:web:b7dcf0a22ea862b95358b7",
  measurementId: "G-8WE8QJ7LWL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase
export const auth=firebase.auth()
export const db=firebase.firestore()
