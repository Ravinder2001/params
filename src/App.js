/** @format */
import { Router, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Data from "./components/Data";
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/:type' element={<Data />}></Route>
			</Routes>
		</>
	);
}

export default App;
