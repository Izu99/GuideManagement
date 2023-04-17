import React from "react";
import "../Styles/Report.css";

function Report() {
	return (
		<div className='Report'>
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
