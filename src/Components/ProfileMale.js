import React, { useState, Component } from "react";
import "../Styles/Profile.css";
import RatingStar from "./Rating";
import { withRouter, NavLink } from "react-router-dom"
import axios from "axios";
import GuideTableThrow from "./GuideTableThrow";



export default class ProfileMale extends Component {

	constructor(props) {
		super(props);
		this.state = { mguide: [] };
		this.state.Email = this.props.match.params.id;

		
	}

	componentDidMount() {
		//  alert('Username is ' +this.props.match.params.id);
		axios
			.get("http://localhost:8090/guide/" + this.props.match.params.id)
			.then((response) => {
			
				this.setState({ mguide: response.data });
			})
			.catch(function (error) {
				console.log(error);
				
			});
	}
	tabRow() {
		// eslint-disable-next-line react/jsx-no-undef
		return <GuideTableThrow obj={this.state.mguide} />;
	}

    render() {
	return (
		<div className='ProfileMale'>
			<nav>
				<ul className='nav-links'>
					<li>
						<NavLink exact to='/home' activeClassName='active'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/explore' activeClassName='active'>
							Explore
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/blog' activeClassName='active'>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/hotel' activeClassName='active'>
							Hotel
						</NavLink>
					</li>

					<li>
						<NavLink exact to='/guide' activeClassName='active'>
							Guide
						</NavLink>
					</li>
				</ul>
				<div className='profile'>
					<NavLink to={`/index/${this.props.match.params.id}`}></NavLink>
					<i className='fa-solid fa-ellipsis-vertical'></i>
				</div>
			</nav>
			<div className='profile-image'>
				<img
					src={
						"https://4.bp.blogspot.com/-BHhUazKytmw/VbCfWPqrOJI/AAAAAAAAB7c/qj6WVX3du-s/s1600/51b91bba5a3fd9b6c8b9c53bc0ab6c65.jpg"
					}
					alt=''
					srcset=''
				/>
				<button type='submit'>Contact Me</button>
			</div>
			<table>




				<tr>
					<td>
					<h2> {this.tabRow('fullName')}</h2>
					</td>
				</tr>
				<tr>
					<td className='ratingStar'>
						<p> &#9733; &#9733; &#9733; &#9733; &#9733; </p>
					</td>
				</tr>
				<tr>
					<td>{this.tabRow('fullName')}</td>
				</tr>
				<tr>
				<td>{this.tabRow('location')}</td>
				</tr>
				<tr>
				<td>{this.tabRow('languages')}</td>
				</tr>
				
				<tr>
					<td>
					{this.tabRow('description')}
					</td>
				</tr>

				<tr>
					<td>
					{this.tabRow('contactNo')}
					</td>
				</tr>
				<tr>
					<td>
					{this.tabRow('Email')}
					</td>
				</tr>
			</table>
		</div>
	);
}
}
