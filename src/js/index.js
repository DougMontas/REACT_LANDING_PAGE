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

// import React, { Home } from 'react';
// import React, { NavBar } from 'react';
// import React, { JumboTron } from 'react';
// import React, { Cards } from 'react';
// import React, { PageFooter } from 'react';
import { NavBar, JumboTron, Cards, PageFooter } from "./component/home.jsx";

<div>

	<NavBar />,
	<JumboTron />,
	<Cards />,
	<PageFooter />, 
    
</div>;

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
