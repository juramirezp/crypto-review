// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
	apiKey: "AIzaSyABvpbEKPVGIOrTMJXQY7xnOnQiivkl85Y",
	authDomain: "crypto-review-c4908.firebaseapp.com",
	projectId: "crypto-review-c4908",
	storageBucket: "crypto-review-c4908.appspot.com",
	messagingSenderId: "623640972814",
});

const db = getFirestore();

export { db, firebaseApp };
