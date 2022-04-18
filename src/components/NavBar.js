import React from "react";
import PropTypes from "prop-types";

const NavBar = (props) => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					{props.navTitle}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								{props.firstLink}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{props.secondLink}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{props.thirdLink}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{props.fourthLink}
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
NavBar.propTypes = {
	navTitle: PropTypes.string,
	firstLink: PropTypes.string,
	secondLink: PropTypes.string,
	thirdLink: PropTypes.string,
	fourthLink: PropTypes.string,
};

export default NavBar;
