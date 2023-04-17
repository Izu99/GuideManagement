import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import React, { Component } from "react";
import GuideFemale from "./Components/GuideFemale";
import GuideMale from "./Components/GuideMale";
import NavigationBar from "./Components/Header";
import GuideRegister from "./Components/GuideRegister";

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
						<Route path='/guidemale' component={GuideMale} />
						<Route path='/navbar' component={NavigationBar} />
						<Route path='/guideregister' component={GuideRegister} />
						<Redirect to={HomePage} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
