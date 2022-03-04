import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../modules/auth/screens/Login";
import Register from "../modules/auth/screens/Register";
import About from "../modules/corporate/screens/About";
import Contact from "../modules/corporate/screens/Contact";
import Home from "../modules/corporate/screens/Home";
import Privacy from "../modules/corporate/screens/Privacy";
import Terms from "../modules/corporate/screens/Terms";
import Dashboard from "../modules/dashboard/screens/Dashboard";
import User from "../modules/user/screens/User";
export default function Routing() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/privacy-policy" element={<Privacy />} />
				<Route path="/terms-conditions" element={<Terms />} />
				<Route path="/contact" element={<Contact />} />

				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/user" element={<User />} />
			</Routes>
		</Router>
	);
}
