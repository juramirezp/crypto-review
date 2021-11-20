import { db, firebaseApp } from "../services/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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
