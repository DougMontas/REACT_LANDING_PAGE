import React from "react";
import PropTypes from "prop-types";

const PageFooter = (props) => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					{props.footer}
				</a>
			</nav>
		</div>
	);
};
PageFooter.propTypes = {
	footer: PropTypes.string,
};

export default PageFooter;
