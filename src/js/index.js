//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import { render } from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import { Home } from "./component/home.jsx";
// import { NavBar } from "./component/home.jsx";
// import { JumboTron } from "./component/home.jsx";
// import { Cards } from "./component/home.jsx";
// import { PageFooter } from "./component/home.jsx";

import Home from "./component/home.jsx";
import NavBar from "./component/home.jsx";
import JumboTron from "./component/home.jsx";
import Cards from "./component/home.jsx";
import PageFooter from "./component/home.jsx";

// import React, { Home } from 'react';
// import React, { NavBar } from 'react';
// import React, { JumboTron } from 'react';
// import React, { Cards } from 'react';
// import React, { PageFooter } from 'react';

// import { NavBar, JumboTron, Cards, PageFooter } from "./component/home.jsx";

<div>

    <Navbar
        navTitle='Start Bootstrap'
        firstLink='Home'
        secondLink='About'
        thirdLink='Services'
        fourthLink='Contact'
    />,
    <JumboTron
        title='A Warm Welcome'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta sequi, corrupti impedit totam obcaecati rerum animi iure praesentium beata.'
        button='Call to Action!'
    />,

    <Card
        Title_1='Card title'
        Title_2='Card title'
        Title_3='Card title'
        description_1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta sequi, corrupti impedit totam obcaecati rerum animi iure praesentium beata.'
        description_2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta sequi, corrupti impedit totam obcaecati rerum animi iure praesentium beata.'
        description_3='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta sequi, corrupti impedit totam obcaecati rerum animi iure praesentium beata.'
        button_1='Call to Action!'
        button_2='Call to Action!'
        button_3='Call to Action!'
    />,
    <Card
        footer='Copyright @ Your Website 2022'
    />,

</div>;

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
