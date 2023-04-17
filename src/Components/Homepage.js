import React, {Component} from 'react'
import '../Styles/HomePage.css'
import { withRouter, NavLink } from "react-router-dom";

export default class HomePage extends Component {
  render() {
  return (
    <div className='homepage-Image'>
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
      <h2>Find Your Tour Guide</h2>
      <button type='submit'><a href='/guidemale'> Male Guides </a></button>

      <button type='submit'><a href='/guidefemale'> Female Guides </a></button>
    </div>
  )
}
}