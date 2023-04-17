import React, {useState } from 'react'
import '../Styles/Profile.css'
import RatingStar from './Rating'

function ProfileFemale() {

    const [rating, setRating] = useState();

	const handleRatingSelect = (rating) => {
		setRating(rating);
	};



  return (
    <div className='ProfileFemale'>
        <div className="profile-image">
            <img src={'https://4.bp.blogspot.com/-BHhUazKytmw/VbCfWPqrOJI/AAAAAAAAB7c/qj6WVX3du-s/s1600/51b91bba5a3fd9b6c8b9c53bc0ab6c65.jpg'} alt="" srcset="" />
            <button type='submit'>Contact Me</button>
        </div>
        <table>
            <tr>
                <td>
                    <h2>Amila Tharanga</h2>
                </td>
            </tr>
            <tr>
                <td className='ratingStar'><p> &#9733; &#9733; &#9733; &#9733; &#9733; </p></td>
            </tr>
            <tr>
                <td>
                    Location
                </td>
            </tr>
            <tr>
                <td>Languages</td>
            </tr>
            <tr>
                <td>Verification</td>
            </tr>
            <tr>
                <td>Response time</td>
            </tr>
            <tr>
                <td>
                    <div className="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis saepe, provident voluptatum quia, repellat enim distinctio eaque rerum aspernatur, quasi excepturi voluptate praesentium a recusandae molestias autem illum consequatur sunt.
                    </div>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default ProfileFemale