import React, { Component } from "react";

class NavBar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<a className="navbar-brand" href="#">
						{this.props.navTitle}
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
									{this.props.firstLink}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{this.props.secondLink}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{this.props.thirdLink}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{this.props.fourthLink}
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
	//     NavBar.propTypes = {
	// 	navTitle: PropTypes.string,
	// 	firstLink: PropTypes.string,
	// 	secondLink: PropTypes.string,
	// 	thirdLink: PropTypes.string,
	// 	fourthLink: PropTypes.string,
	// }
};

export default NavBar;
