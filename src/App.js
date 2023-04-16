import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import React, { Component } from "react";
import GuideFemale from "./Components/GuideFemale";

import "./App.css";
import HomePage from "./Components/HomePage";

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/guidefemale' component={GuideFemale} />
						<Redirect to={HomePage} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
