import React from 'react'
import '../Styles/GuideFemale.css'

function GuideFemale() {
  return (
    <div className='GuideFemale'>
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
  )
}

export default GuideFemale