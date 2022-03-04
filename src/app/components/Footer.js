import { Link } from "react-router-dom";
export const Footer = () => {
	return (
		<section>
			<div class="container">
				<div class="row">
					<div class="col-sm"></div>
					<div class="col-sm"></div>
					<div class="col-sm"></div>
					<div class="col-sm">
						<ul>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/privacy-policy">Privacy Policy</Link>
							</li>
							<li>
								<Link to="/terms-conditions">Terms & Conditions</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
