import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
var firebaseConfig = {
  apiKey: "AIzaSyAaVShtXKH8jFPbKlsQsV__JCrONhLuJjU",
  authDomain: "movies-56bdf.firebaseapp.com",
  databaseURL: "https://movies-56bdf.firebaseio.com",
  projectId: "movies-56bdf",
  storageBucket: "",
  messagingSenderId: "870648658967",
  appId: "1:870648658967:web:39a0a0bbf70526d1"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
