import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Attandance from "../modules/attandance/screens/Attandance";
import Login from "../modules/auth/screens/Login";
import Logout from "../modules/auth/screens/Logout";
import Register from "../modules/auth/screens/Register";
import About from "../modules/corporate/screens/About";
import Contact from "../modules/corporate/screens/Contact";
import Home from "../modules/corporate/screens/Home";
import Privacy from "../modules/corporate/screens/Privacy";
import Terms from "../modules/corporate/screens/Terms";
import Dashboard from "../modules/dashboard/screens/Dashboard";
import Employee from "../modules/employee/screens/Employee";
import Leave from "../modules/leave/screens/Leave";
import Project from "../modules/project/screens/Project";
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
				<Route path="/logout" element={<Logout />} />
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard" element={<Dashboard />} />

				<Route path="/employee" element={<Employee />} />
				<Route path="/leave" element={<Leave />} />
				<Route path="/attendance" element={<Attandance />} />
				<Route path="/project" element={<Project />} />
			</Routes>
		</Router>
	);
}
