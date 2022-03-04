import { Link } from "react-router-dom";
export const Header = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<Link class="navbar-brand" to="/">
					JAIN TECH
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						
						<li class="nav-item">
							<Link class="nav-link active" to="/login">
								Sign In
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link active" to="/register">
								Sign Up
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};