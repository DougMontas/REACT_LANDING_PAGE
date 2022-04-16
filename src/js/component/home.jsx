import React from "react";
// import ReactDOM from "react-dom"

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

export const Home = () => {
	function NavBar(props) {
		let navBar = (
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
		return navBar;

	}
	NavBar.propTypes = {
		navTitle: PropTypes.string,
		firstLink: PropTypes.string,
		secondLink: PropTypes.string,
		thirdLink: PropTypes.string,
		fourthLink: PropTypes.string
		// ReactDOM.render(
		// 	<Navbar 
		// 	navTitle = 'Start Bootstrap'
		// 	firstLink = 'Home'
		// 	secondLink = 'About'
		// 	thirdLink = 'Services'
		// 	fourthLink = 'Contact'
		// 	/>
		// )

	};

	function JumboTron(props) {
		const jumboTron = (
			<div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">{props.title}</h1>
						<p className="lead">
							{props.description}
						</p>
						<button type="button" className="btn btn-primary">
							{props.button}
						</button>
					</div>
				</div>
			</div>
		)
		return jumboTron;
	};

	JumboTron.propTypes = {
		title: PropTypes.string,
		description: PropTypes.string,
		button: PropTypes.string,

		// ReactDOM.render(
		// 	<JumboTron 
		//  	title = 'A Warm Welcome'
		//  	description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta sequi, corrupti impedit totam obcaecati rerum animi iure praesentium beata.'
		//  	button = 'Call to Action!'
		//  	/>
		// )
	};

	function Cards(props) {
		let _cards = (
			<div>
				<div class="col-sm-3">
					<div class="card">
						<div class="card-body">
							<img class="card-img-top" src="..." alt="Card image cap" />
							<h5 class="card-title">{props.cardTitle_1}e</h5>
							<p class="card-text">{props.description_1}</p>
							<a href="#" class="btn btn-primary">{props.button_1}</a>
						</div>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="card">
						<div class="card-body">
							<img class="card-img-top" src="..." alt="Card image cap" />
							<h5 class="card-title">{props.cardTitle_2}</h5>
							<p class="card-text">{props.description_2}.</p>
							<a href="#" class="btn btn-primary">{props.button_2}</a>
						</div>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="card">
						<div class="card-body">
							<img class="card-img-top" src="..." alt="Card image cap" />
							<h5 class="card-title">{props.cardTitle_3}</h5>
							<p class="card-text">{props.description_3}</p>
							<a href="#" class="btn btn-primary">{props.button_3}</a>
						</div>
					</div>
				</div>
			</div>

		);
		return _cards;
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

		// ReactDOM.render(
		// 	<Card 
		//  	Title_1 = 'Card title'
		//  	Title_2 = 'Card title'
		//  	Title_3 = 'Card title'
		//  	description_1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta sequi, corrupti impedit totam obcaecati rerum animi iure praesentium beata.'
		//  	description_2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta sequi, corrupti impedit totam obcaecati rerum animi iure praesentium beata.'
		//  	description_3 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta sequi, corrupti impedit totam obcaecati rerum animi iure praesentium beata.'
		//  	button_1 = 'Call to Action!'
		//  	button_2 = 'Call to Action!'
		//  	button_3 = 'Call to Action!'
		//  	/>
		// )
	};

function PageFooter(props) {
	let pageFooter = (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					{props.footer}
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
	)
	return pageFooter;
};
Cards.propTypes = {
	footer: PropTypes.string
	// ReactDOM.render(
	// 	<Card 
	//  	footter = 'Copyright @ Your Website 2022'
	//  	/>
	// )
};
		//create your first component
		// const Home = () => {
		// 	return (
		// 		<div>
		// 			<h1 classNameName="text-center mt-5">Hello Rigo!</h1>
		// 			<p>
		// 				<img src={rigoImage} />
		// 			</p>
		// 			<a href="#" classNameName="btn btn-success">
		// 				If you see this green button... bootstrap is working...
		// 			</a>
		// 			<p>
		// 				Made by{" "}
		// 				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
		// 				love!
		// 			</p>
		// 		</div>
		// 	);
		// };
	
};
export default Home;
