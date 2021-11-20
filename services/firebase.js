// Initialize Cloud Firestore through Firebase
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

// Configure Firebase.
const config = {
	apiKey: "AIzaSyABvpbEKPVGIOrTMJXQY7xnOnQiivkl85Y",
	authDomain: "crypto-review-c4908.firebaseapp.com",
	projectId: "crypto-review-c4908",
	storageBucket: "crypto-review-c4908.appspot.com",
	messagingSenderId: "623640972814",
	// ...
};
firebase.initializeApp(config);

const db = getFirestore();

export { db, firebase };
