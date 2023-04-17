import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/GuideRegister.css";

export default class GuideRegister extends Component {
	render() {
		return (
			<div className='GuideRegister'>
				<form>
					<h2>Update Account</h2>
					<div className='form-row name'>
						<div className='form-group'>
							<p className="form-control">Guide's Full Name</p>
							{/* <label htmlFor="firstName">First Name</label> */}
							<input
								type='text'
								className='form-control'
								id='name'
								//   placeholder="Enter your first name"
								required
								//   value={this.state.firstName}
								//   onChange={this.onChangefirstName}
							/>
						</div>
						<div className='form-group'>
							{/* <label htmlFor="lastName">Last Name</label> */}
							<p className="form-control">Location</p>
							<input
								type='text'
								className='form-control'
								id='location'
								//   placeholder="Enter your last name"
								required
								//   value={this.state.lastName}
								//   onChange={this.onChangelastName}
							/>
						</div>
						<div className='form-group'>
							{/* <label htmlFor="lastName">Last Name</label> */}
							<p className="form-control">Speaking Languages</p>
							<input
								type='text'
								className='form-control'
								id='language'
								//   placeholder="Enter your last name"
								required
								//   value={this.state.lastName}
								//   onChange={this.onChangelastName}
							/>
						</div>
						<div className='form-group'>
							{/* <label htmlFor="lastName">Last Name</label> */}
							<p className="form-control">A clear photo of him/her</p>
							<input
								type='file'
								className='form-control'
								id='image'
								//   placeholder="Enter your last name"
								required
								//   value={this.state.lastName}
								//   onChange={this.onChangelastName}
							/>
						</div>
						<div className='form-group'>
							{/* <label htmlFor="lastName">Last Name</label> */}
							<p className="form-control">A brief Description about himself/herself</p>
							<textarea
								className='form-control'
								id='description'
								//   placeholder="Enter your last name"
								required
								//   value={this.state.lastName}
								//   onChange={this.onChangelastName}
							/>
						</div>
                        <div className='form-group'>
							{/* <label htmlFor="lastName">Last Name</label> */}
							<p className="form-control">Contact Number</p>
							<input
								className='form-control'
								id='number'
								//   placeholder="Enter your last name"
								required
								//   value={this.state.lastName}
								//   onChange={this.onChangelastName}
							/>
						</div>
                        <div className='form-group'>
							{/* <label htmlFor="lastName">Last Name</label> */}
							<p className="form-control">Email</p>
							<input
								className='form-control'
								id='email'
								//   placeholder="Enter your last name"
								required
								//   value={this.state.lastName}
								//   onChange={this.onChangelastName}
							/>
						</div>

					</div>
					{/* <div className='form-row conditions'>
						<div className='form-group'>
							<input type='checkbox' name='agree' id='agree' required/>
							<p className="form-control">
								I agree to all <a href='http://'>conditions.</a>
							</p>
						</div>
					</div> */}
					<button type='submit'>
						<Link to='/homepage'>Update</Link>
					</button>
				</form>
			</div>
		);
	}
}
