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
import ProfileFemale from "./Components/ProfileFemale";
import ProfileMale from "./Components/ProfileMale";
import Report from "./Components/Report";

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
						<Route path='/profilefemale' component={ProfileFemale} />
						<Route path='/profilemale' component={ProfileMale} />
						<Route path='/report' component={Report} />
						<Redirect to={HomePage} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
