import React, { useEffect, useState } from "react";
import { db, firebase } from "../../services/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/compat/auth";
import "../App.css";

const Login = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	// Configure FirebaseUI.
	const uiConfig = {
		// Popup signin flow rather than redirect flow.
		signInFlow: "popup",
		// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
		signInSuccessUrl: "/signedIn",
		// We will display Google and Facebook as auth providers.
		signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
		callbacks: {
			// Avoid redirects after sign-in.
			signInSuccessWithAuthResult: () => false,
		},
	};

	// Listen to the Firebase Auth state and set the local state.
	useEffect(() => {
		const unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged((user) => {
				setIsSignedIn(!!user);
			});
		return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
	}, []);

	if (!isSignedIn) {
		return (
			<div className="App flex ">
				<h1>My App</h1>
				<p>Please sign-in:</p>
				<StyledFirebaseAuth
					uiConfig={uiConfig}
					firebaseAuth={firebase.auth()}
				/>
			</div>
		);
	}

	return (
		<div className="App flex">
			<h1>My App</h1>
			<p>
				Welcome {firebase.auth().currentUser.displayName}! You are now
				signed-in!
			</p>
			<a onClick={() => firebase.auth().signOut()}>Sign-out</a>
		</div>
	);
};

export default Login;
