import React from "react";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";

function AppointmentHomepage() {
	return (
		<div>
			<nav>
				<div className='logo'>
					<a href='/'>
						<img src={logo} alt='' srcset='' />
					</a>
				</div>
				<ul className='nav-links'>
					<li>
						<a href={"/HotelHomepage/" + this.props.match.params.id}>hotel</a>
					</li>
					<li>
						<a href={"/appointmentHomepage/" + this.props.match.params.id}>
							Appointment
						</a>
					</li>
					<li>
						<a href={"/TourguideHomepage/" + this.props.match.params.id}>
							Guide
						</a>
					</li>
					<li>
						<a href='/Payment'>Payment</a>
					</li>
					<li>
						<a href={"/RoomHomePage/" + this.props.match.params.id}>Room</a>
					</li>
					<li>
						<a href={"/VehicleHomePage/" + this.props.match.params.id}>
							Vehicle
						</a>
					</li>
					<li>
						<a
							href={
								"/AyurvedicTreatmentHomePage/" + this.props.match.params.id
							}>
							Treatement
						</a>
					</li>
					<li>
						<a href={"/destinations/" + this.props.match.params.id}>
							Destination
						</a>
					</li>
					<li>
						<a href={"/ExperienceHomepage/" + this.props.match.params.id}>
							Experience
						</a>
					</li>
				</ul>
				<div className='profile'>
						<a href={"/index/" + this.props.match.params.id}>
							{/* Experience */}
							<img src={image} alt='' srcset='' />
						</a>
						<i class='fa-solid fa-ellipsis-vertical'></i>
					</div>
			</nav>
		</div>
	);
}

export default AppointmentHomepage;
