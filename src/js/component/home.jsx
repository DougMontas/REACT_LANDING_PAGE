import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import NavBar from "../../components/NavBar";
import JumboTron from "../../components/JumboTron";
import Cards from "../../components/Cards";
import PageFooter from "../../components/PageFooter";

const Home = () => {
	return (
		<div>
			<NavBar
				navTitle="Start Bootstrap"
				firstLink="Home"
				secondLink="About"
				thirdLink="Services"
				fourthLink="Contact"
			/>

			<JumboTron
				title="A Warm Welcome"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta sequi, corrupti impedit totam obcaecati rerum animi iure praesentium beata."
				button="Call to Action!"
			/>

			<Cards
				cardTitle_1="Card title"
				cardTitle_2="Card title"
				cardTitle_3="Card title"
				description_1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta sequi, corrupti impedit totam	obcaecati rerum animi iure praesentium beata."
				description_2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta sequi, corrupti impedit totam obcaecati rerum animi iurepraesentium beata."
				description_3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta sequi, corrupti impedit totam obcaecati rerum animi iure praesentium beata."
				button_1="Call to Action!"
				button_2="Call to Action!"
				button_3="Call to Action!"
			/>

			<PageFooter footer="Copyright @ Your Website 2022" />
		</div>
	);
};
export default Home;
