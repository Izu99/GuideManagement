import React, {Component} from 'react'
import '../Styles/GuideCard.css'
import { withRouter, NavLink } from "react-router-dom";
import '../Styles/Header.css'
import GuideTablecolum from "./GuideTablecolum";
import axios from "axios";

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


	// tabRow(colName) {
	// 	return this.state.guide.map(function(object, i) {
	// 		return <td key={i}>{object[colName]}</td>;
	// 	});
	// }

	//  tabRow(colName) {
  	// return this.state.guide.map(function(object, i) {
	//  	  return (
  	// 	<td key={i}>
  	// 	  <div style={{display: 'flex', alignItems: 'center'}}>
 	// 		<img src="https://via.placeholder.com/50" alt="avatar" style={{width: 30, height: 30, borderRadius: '50%', marginRight: 10}} />
  	// 		{object[colName]}
  	// 	  </div>
 	// 	</td>  	  );
  	// });
    // }
	

	tabRow() {
		return this.state.guide.map(function(object, i) {
			return (
				<td key={i}>
					<div style={{display: 'flex', alignItems: 'center'}}>
						<div style={{display: 'flex'}}>
							{[...Array(1)].map((_, i) => (
								<img key={i} src="https://via.placeholder.com/50"  alt="avatar" style={{width: 150, height: 150, borderRadius: '50%', marginRight: -10}} />
								
							))}
						</div>
						<div style={{marginLeft: 10}}>
							<div>{object.fullName}</div> 
							<div>{object.location}</div>
							<button type='submit'><a href='/guidefemale'> Female Guides </a></button>
						</div>
					</div>
				</td>
			);
		});
	}
	

	  

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

			


				<div>
            <br/>
           
            
            <table className="table table-striped" style={{marginTop:5, display:'table', marginLeft:'auto', marginRight:'auto'}}>
                <tbody style={{padding:20, textAlign:'center'}}>
			
                    <tr>
                        <th style={{padding:20}}></th>
                        {this.tabRow('fullName')}
						
						
                     </tr>
                     <tr> 
                        <th style={{padding:20}}></th>
                        {/* {this.tabRow('location')} */}
						
                    </tr>
                    
                </tbody>
            </table>
         </div>



			</div>
    </div>
  );
}
}