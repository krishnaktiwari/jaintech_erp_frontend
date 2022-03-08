import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
export default function Dashboard() {
	const dispatch = useDispatch();

	const s = useSelector((state) => state);

	
	return (
		<>
			<Header />
			<section id="container">Dashboard</section>
			<Footer />
		</>
	);
}
