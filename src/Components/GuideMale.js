import React, {Component} from 'react'
import '../Styles/GuideCard.css'
import { withRouter, NavLink } from "react-router-dom";
import '../Styles/Header.css'

export default class GuideMale extends Component {
    render() {
  return (
    <div className='GuideMale'>
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
        <div className='right-side'>
				{/* <Header /> */}
				<h2 className='main-header'>Guide</h2>

				<table class='table table-striped'>
					{" "}
					<tr className='users'>
						<td className='user'>
                            <div className="guidecard">
							<img
								src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
								alt=''
							/>
							<div className='details'>
								<h2>UserName</h2>
								<p>city</p>
							</div>
                            </div>
						</td>
						<td className='user'>
                            <div className="guidecard">
							<img
								src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
								alt=''
							/>
							<div className='details'>
								<h2>UserName</h2>
								<p>city</p>
							</div>
                            </div>
						</td>
						<td className='user'>
                            <div className="guidecard">
							<img
								src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
								alt=''
							/>
							<div className='details'>
								<h2>UserName</h2>
								<p>city</p>
							</div>
                            </div>
						</td>
					</tr>
					<tr className='users'>
						<td className='user'>
                            <div className="guidecard">
							<img
								src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
								alt=''
							/>
							<div className='details'>
								<h2>UserName</h2>
								<p>city</p>
							</div>
                            </div>
						</td>

						<td className='user'>
                            <div className="guidecard">
							<img
								src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
								alt=''
							/>
							<div className='details'>
								<h2>UserName</h2>
								<p>city</p>
							</div>
                            </div>
						</td>

						<td className='user'>
                            <div className="guidecard">
							<img
								src='http://health5.ru/wp-content/uploads/2018/03/Rejuvenate-the-face.jpg'
								alt=''
							/>
							<div className='details'>
								<h2>UserName</h2>
								<p>city</p>
							</div>
                            </div>
						</td>
					</tr>
				</table>
			</div>
    </div>
  );
}
}