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
import FemaleGuideRegister from "./Components/FemaleGuideRegister";
import GuideTableView from "./Components/GuideTableView";
import FemaleTableView from "./Components/FemaleTableView";
import EditFguide from "./Components/EditFguide";
import EditGuide from "./Components/EditGuide";
import ProfileFemale from "./Components/ProfileFemale";
import ProfileMale from "./Components/ProfileMale";
// import HomePage from "./Components/HomePage";

import "./App.css";
import HomePage from "./Components/Homepage";

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path='/homepage' component={HomePage} />
						{/* <Route path='/' component={HomePage} /> */}
						<Route path='/guidefemale' component={GuideFemale} />
						<Route path='/guidemale' component={GuideMale} />
						<Route path='/navbar' component={NavigationBar} />
						<Route path='/guideregister' component={GuideRegister} />
						<Route path='/FemaleGuideRegister' component={FemaleGuideRegister} />
						<Route path='/FemaleTableView' component={FemaleTableView} />
						<Route path='/GuideTableView' component={GuideTableView} />
						<Route path='/EditFguide/:id' component={EditFguide} />
						<Route path='/EditGuide/:id' component={EditGuide} />
						<Route path='/ProfileFemale' component={ProfileFemale} />
						<Route path='/ProfileMale/:id' component={ProfileMale} />
						<Redirect to={HomePage} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
