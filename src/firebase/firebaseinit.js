import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCNReEBIGyKoG55e7aBqvHU4-kYeXAtBUg",
    authDomain: "weather-app-8dd3e.firebaseapp.com",
    projectId: "weather-app-8dd3e",
    storageBucket: "weather-app-8dd3e.appspot.com",
    messagingSenderId: "221707695499",
    appId: "1:221707695499:web:b7cba6f4479b248b18eb8e"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();