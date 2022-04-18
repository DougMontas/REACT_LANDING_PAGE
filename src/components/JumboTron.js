import React from "react";
import PropTypes from "prop-types";

const JumboTron = (props) => {
	return (
		<div>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">{props.title}</h1>
					<p className="lead">{props.description}</p>
					<button type="button" className="btn btn-primary">
						{props.button}
					</button>
				</div>
			</div>
		</div>
	);
};

JumboTron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	button: PropTypes.string,
};

export default JumboTron;
