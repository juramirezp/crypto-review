import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./components/login";

function App() {
	const [count, setCount] = useState(0);

	return <Login></Login>;
}

export default App;
