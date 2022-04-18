import React, { Component } from "react";

class PageFooter extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<a className="navbar-brand" href="#">
						{this.props.footer}
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
					<div
						className="collapse navbar-collapse"
						id="navbarText"></div>
				</nav>
			</div>
		);
	}
	
}
PageFooter.propTypes = {
	footer: PropTypes.string,
	
};

export default PageFooter;
