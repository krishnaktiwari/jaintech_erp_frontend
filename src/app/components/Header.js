import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
	const dispatch = useDispatch();

	const s = useSelector((state) => state);
	return (
		<>
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
						<ul class="navbar-nav mr-auto">
							<li class="nav-item">
								<Link class="nav-link active" to="/login">
									Sign In
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link active" to="/dashboard">
									Dashboboard
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link active" to="/employee">
									Employee
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link active" to="/leave">
									Leave
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link active" to="/attendance">
									Attendance
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link active" to="/project">
									Project
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link active" to="/logout">
									Logout
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div>{JSON.stringify(s.auth.token)}</div>
		</>
	);
};
