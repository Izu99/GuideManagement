import React, { Component } from "react";
import "../Styles/Header.css";
import { withRouter, NavLink } from "react-router-dom";

export default class NavigationBar extends Component {
	render() {
		return (
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
		);
	}
}
