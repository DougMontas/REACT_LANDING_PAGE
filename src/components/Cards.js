import React from "react";
import PropTypes from "prop-types";

const Cards = (props) => {
	return (
		<div className="d-flex">
			<div className="col-sm-3">
				<div className="card">
					<div className="card-body">
						<img
							className="card-img-top"
							src="..."
							alt="Card image cap"
						/>
						<h5 className="card-title">{props.cardTitle_1}e</h5>
						<p className="card-text">{props.description_1}</p>
						<a href="#" className="btn btn-primary">
							{props.button_1}
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
						<h5 className="card-title">{props.cardTitle_2}</h5>
						<p className="card-text">{props.description_2}.</p>
						<a href="#" className="btn btn-primary">
							{props.button_2}
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
						<h5 className="card-title">{props.cardTitle_3}</h5>
						<p className="card-text">{props.description_3}</p>
						<a href="#" className="btn btn-primary">
							{props.button_3}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
Cards.propTypes = {
	cardTitle_1: PropTypes.string,
	cardTitle_2: PropTypes.string,
	cardTitle_3: PropTypes.string,
	description_1: PropTypes.string,
	description_2: PropTypes.string,
	description_3: PropTypes.string,
	button_1: PropTypes.string,
	button_2: PropTypes.string,
	button_3: PropTypes.string,
};

export default Cards;
