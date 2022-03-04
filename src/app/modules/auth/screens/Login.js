import React from "react";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { LoginForm } from "../components/LoginForm";
import { WelcomeCard } from "../components/WelcomeCard";

export default function Login() {
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
							<LoginForm />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
