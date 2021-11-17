import firebase from "firebase";

const db = firebase.collection("/coins");

class CoinsService {
	getAll() {
		return db;
	}

	create(coin) {
		return db.add(coin);
	}

	update(id, value) {
		return db.doc(id).update(value);
	}

	delete(id) {
		return db.doc(id).delete();
	}
}

export default new CoinsService();
