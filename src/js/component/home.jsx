import React from "react";
// import ReactDOM from "react-dom"

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	function NavBar() {
		let navBar = (
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<a class="navbar-brand" href="#">Start Bootstrap</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarText">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">About</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Services</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</nav>

		)
		return navBar
	}
	function JumboTron() {
		const jumboTron = (
			<div class="jumbotron jumbotron-fluid">
				<div class="container">
					<h1 class="display-4">A warm Welcome!</h1>
					<p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima voluptatem magnam ut reprehenderit modi veniam delectus. Quos officiis corporis asperiores repellat suscipit, similique dolor, mollitia saepe quaerat ratione fuga.
					</p>
					<button type="button" class="btn btn-primary">Call to action!</button>
				</div>
			</div>
		)
		return jumboTron
	}

	function Cards() {
		let _cards = (
			<div class="jumbotron jumbotron-fluid">
				<div class="container">
					<h1 class="display-4">A warm Welcome!</h1>
					<p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima voluptatem magnam ut reprehenderit modi veniam delectus. Quos officiis corporis asperiores repellat suscipit, similique dolor, mollitia saepe quaerat ratione fuga.
					</p>
					<button type="button" class="btn btn-primary">Call to action!</button>
				</div>
			</div>
		)
		return _cards
	}

	function PageFooter() {
		let pageFooter = (
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<a class="navbar-brand" href="#">Copyright @ Your Website 2022</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarText">
				</div>
			</nav>
		)
		return pageFooter

	}

};

//create your first component
// const Home = () => {
// 	return (
// 		<div>
// 			<h1 className="text-center mt-5">Hello Rigo!</h1>
// 			<p>
// 				<img src={rigoImage} />
// 			</p>
// 			<a href="#" className="btn btn-success">
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

export default Home;
