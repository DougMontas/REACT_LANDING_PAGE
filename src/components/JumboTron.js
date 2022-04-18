import React, { Component } from "react";
import PropTypes from "prop-types";

export class JumboTron extends Component {
	render() {
		JumboTron.propTypes = {
			title: PropTypes.string,
			description: PropTypes.string,
			button: PropTypes.string
		}
		return (
			<div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">{this.props.title}</h1>
						<p className="lead">{this.props.description}</p>
						<button type="button" className="btn btn-primary">
							{this.props.button}
						</button>
					</div>
				</div>
			</div>
		);
	}
}


export default JumboTron;
