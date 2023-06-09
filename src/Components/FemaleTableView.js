/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import "../Styles/guide.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import FemaleTableTrow from "./FemaleTableTrow";
 import jsPDF from "jspdf";
 import 'jspdf-autotable';

export default class FGuide extends Component {
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
			.get("http://localhost:8090/femaleGuide/getall/")
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
		return this.state.guide.map(function (object, i) {
			return <FemaleTableTrow obj={object} key={i} />;
		});
		
	}

	exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
		const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "My All Repaire Report";
        const headers = [["fullName", "location","languages", "description","contactNo", "Email"]];
    
        const data = this.state.guide.map(elt=> [elt.fullName, elt.location,  elt.languages,elt.description, elt.contactNo, elt.Email]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
      }

	render() {
		return (
			<div className='GuideTableView'>
				
				<br /> <h3 align='center'>Female Guide Management</h3>
				<div className='row-frm'>

					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>Full Name</th>
								<th>Location</th>
								<th>Language</th>
								<th>Description</th>
								<th>contact number</th>
                                <th>Email</th>

								<th colSpan='3'>Action</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</table>
					<center>
                        <button onClick={() => this.exportPDF()}style={{background:'blue',padding:10, color:'white', border:'none',borderRadius:'20'}}>- Export All -</button>
                    </center>
				</div>
				<br />
				<br />
				<div>
					<hr className='shadow-lg card-footer' />
				</div>
			
			</div>
		);
	}
}
