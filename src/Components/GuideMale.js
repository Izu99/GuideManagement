import React, { Component } from "react";
import "../Styles/GuideCard.css";
import { withRouter, NavLink } from "react-router-dom";
import "../Styles/Header.css";
import GuideTablecolum from "./GuideTablecolum";
import axios from "axios";

import _ from "lodash";

export default class GuideMale extends Component {
	constructor(props) {
		super(props);
		this.state = { guide: [], search: "" };
		this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
		axios
			.get("http://localhost:8090/guide/getall/")
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ guide: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		const numCols = 5;
		const rows = [];

		for (let i = 0; i < this.state.guide.length; i += numCols) {
			const row = (
				<div className='GuideFemale'>
					<table>
						<tr key={i}>
							{this.state.guide.slice(i, i + numCols).map((object) => (
								<td key={object.id}>
									<div className='profile-image'>
										<div style={{ display: "flex" }}>
											{[...Array(1)].map((_, i) => (
												<img
													key={i}
													src='https://via.placeholder.com/50'
													alt='avatar'
												/>
											))}
										</div>
										<div>
											<div>{object.fullName}</div>
											<div>{object.location}</div>
											<button type='submit'><a href='/ProfileMale'> profile </a></button>
										</div>
									</div>
								</td>
							))}
						</tr>
					</table>
				</div>
			);
			rows.push(row);
		}

		return rows;
	}

	render() {
		return (
			<div className='GuideMale'>
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
				<div className='header-image'></div>

				<div>
					{" "}
					<div className='buttons'>
					
					<button type='submit'><a href='/GuideTableView'> Print </a></button>
					<button type='submit'><a href='/guideregister'> Add </a></button>
					</div>
					<table className='table'>
						<tbody>
							<tr>{this.tabRow("fullName")}</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
