import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { authSelector } from "../../../reducers/auth/AuthSlice";
import { LoginForm } from "../components/LoginForm";
import { WelcomeCard } from "../components/WelcomeCard";
export default function Login() {
	const dispatch = useDispatch();

	const s = useSelector((state) => state);
	const { inAction } = useSelector(authSelector);
	return (
		<>
			<Header />
			<section>
				<div class="container">
					<div class="row">
						<div class="col-sm">
							<WelcomeCard />
						</div>
						<div class="col-sm">
							{inAction == true ? <p>Loading ...</p> : <></>}
							<LoginForm />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
