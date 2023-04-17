import React, { Component } from "react";
import "../Styles/HomePage.css";

export default class HomePage extends Component {
	render() {
		return (
			<div className='homepage-Image'>
				<h2>Find Your Tour Guide</h2>
				<div className='buttons'>
					<button type='submit'>Male Guides</button>
					<button type='submit'>Female Guides</button>
				</div>
			</div>
		);
	}
}
