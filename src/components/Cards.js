import React, { Component } from "react";

class Cards extends Component {
	render() {
		return (
			<div>
				<div className="col-sm-3">
					<div className="card">
						<div className="card-body">
							<img
								className="card-img-top"
								src="..."
								alt="Card image cap"
							/>
							<h5 className="card-title">
								{this.props.cardTitle_1}e
							</h5>
							<p className="card-text">
								{this.props.description_1}
							</p>
							<a href="#" className="btn btn-primary">
								{this.props.button_1}
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm-3">
					<div className="card">
						<div className="card-body">
							<img
								className="card-img-top"
								src="..."
								alt="Card image cap"
							/>
							<h5 className="card-title">
								{this.props.cardTitle_2}
							</h5>
							<p className="card-text">
								{this.props.description_2}.
							</p>
							<a href="#" className="btn btn-primary">
								{this.props.button_2}
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm-3">
					<div className="card">
						<div className="card-body">
							<img
								className="card-img-top"
								src="..."
								alt="Card image cap"
							/>
							<h5 className="card-title">
								{this.props.cardTitle_3}
							</h5>
							<p className="card-text">
								{this.props.description_3}
							</p>
							<a href="#" className="btn btn-primary">
								{this.props.button_3}
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
	// Cards.propTypes = {
	// 	cardTitle_1: PropTypes.string,
	// 	cardTitle_2: PropTypes.string,
	// 	cardTitle_3: PropTypes.string,
	// 	description_1: PropTypes.string,
	// 	description_2: PropTypes.string,
	// 	description_3: PropTypes.string,
	// 	button_1: PropTypes.string,
	// 	button_2: PropTypes.string,
	// 	button_3: PropTypes.string,
}

export default Cards;
