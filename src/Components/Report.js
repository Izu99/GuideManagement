import React from "react";
import "../Styles/Report.css";

function Report() {
	return (
		<div className='Report'>
            <div className="header-image">
                <h2>#Visit Sri Lanka</h2>
                <p>Report</p>
            </div>
            <button>Report</button>
			<table>
				<thead>
					<td>Name</td>
					<td>Location</td>
					<td>age</td>
					<td>Fluent Languages</td>
				</thead>
				<tr>
					<td>Amila</td>
					<td>Colombo</td>
					<td>21</td>
					<td>2 Languages</td>
				</tr>
			</table>
		</div>
	);
}

export default Report;
