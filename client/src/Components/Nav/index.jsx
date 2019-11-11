import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

function Nav() {
	return (
		<div>
			<nav
				className="navbar navbar-light navbar-expand-lg "
				style={{ backgroundColor: "#B22222", color: "whitesmoke" }}
			>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<h2 className="navbar-brand white-text">ANDES ADMIN</h2>
					<ul className="navbar-nav mr-auto">
						<li>
							<Link to="/" className="nav-link white-text">
								PRODUCTS
							</Link>
						</li>
						<li>
							<Link to="/prices" className="nav-link white-text">
								PRICES
							</Link>
						</li>
						<li>
							<Link to="/contacts" className="nav-link white-text">
								CONTACTS
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
