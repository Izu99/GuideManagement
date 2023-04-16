/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import Footer from "./Footer";
import "../Styles/VehicleTable.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import TreatmentOderThrow from "./TreatmentOderThrow";

export default class TreatementOder extends Component {
	constructor(props) {
		super(props);
		this.state = { treatementOder: [],
             search: "" ,
             email : this.props.match.params.id
            };
		// this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		
		axios
			.get('http://localhost:4000/ayurvedic/alloder/'+this.props.match.params.id)
			.then((response) => {
				// alert('Pass una')
				
				this.setState({ treatementOder: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.treatementOder.map(function (object, i) {
			return <TreatmentOderThrow obj={object} key={i} />;
		});
		// return <OrderTableRow obj={this.state.orders}/>
	}

	render() {
		return (
			<div className='adminVehicleProfile'>
			
			
				<br /> <h3 align='center'>Treatement Oder Management</h3>
				<div className='row-frm'>
					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>Email</th>
								<th>Treatement</th>
                                <th>Quntity</th>
								<th>Total</th>
                                <th>Payment</th>

								<th colSpan='3'>Action</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</table>
				</div>
				<br />
				<br />
				<div>
					<hr className='shadow-lg card-footer' />
				</div>
				<Footer />
			</div>
		);
	}
}
