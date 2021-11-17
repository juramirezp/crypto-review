import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { db, firebaseApp } from "../services/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function App() {
	const [count, setCount] = useState(0);

	// AUTH
	const coinsapp = initializeApp({
		apiKey: "AIzaSyABvpbEKPVGIOrTMJXQY7xnOnQiivkl85Y",
		authDomain: "crypto-review-c4908.firebaseapp.com",
		projectId: "crypto-review-c4908",
		storageBucket: "crypto-review-c4908.appspot.com",
		messagingSenderId: "623640972814",
	});

	// Configure FirebaseUI.
	const uiConfig = {
		// Popup signin flow rather than redirect flow.
		signInFlow: "popup",
		// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
		signInSuccessUrl: "/signedIn",
		// We will display Google and Facebook as auth providers.
		signInOptions: [firebaseApp.auth.GoogleAuthProvider.PROVIDER_ID],
	};

	async function getData() {
		const querySnapshot = await getDocs(collection(db, "coins"));
		querySnapshot.forEach((doc) => {
			console.log(`${doc.id}`);
			console.log(` ${doc.data().name}`);
			console.log(` ${doc.data().amount}`);
		});
	}

	async function addData() {
		try {
			const docRef = await addDoc(collection(db, "coins"), {
				name: "Ethereum",
				amount: "2.45",
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	return (
		<div className="App">
			<header className="App-header">
				<div>
					<h1>My App</h1>
					<p>Please sign-in:</p>
					<StyledFirebaseAuth uiConfig={uiConfig} />
				</div>
				<button onClick={getData}>leer</button>
				<button onClick={addData}>agregar dato</button>
			</header>
		</div>
	);
}

export default App;
