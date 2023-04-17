import React, { useState, Component } from "react";
import "../Styles/Profile.css";
import RatingStar from "./Rating";
import { withRouter, NavLink } from "react-router-dom";

export default class ProfileMale extends Component {
	render() {
		// const [rating, setRating] = useState();

		// const handleRatingSelect = (rating) => {
		// 	setRating(rating);
		// };

		return (
			<div className='ProfileMale'>
				<nav>
					<ul className='nav-links'>
						<li>
							<NavLink exact to='/homepage' activeClassName='active'>
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
							<h2>Amila Tharanga</h2>
						</td>
					</tr>
					<tr>
						<td className='ratingStar'>
							<p> &#9733; &#9733; &#9733; &#9733; &#9733; </p>
						</td>
					</tr>
					<tr>
						<td>Location</td>
					</tr>
					<tr>
						<td>Languages</td>
					</tr>
					<tr>
						<td>Verification</td>
					</tr>
					<tr>
						<td>Response time</td>
					</tr>
					<tr>
						<td>
							<div className='description'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
								saepe, provident voluptatum quia, repellat enim distinctio eaque
								rerum aspernatur, quasi excepturi voluptate praesentium a
								recusandae molestias autem illum consequatur sunt.
							</div>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}
