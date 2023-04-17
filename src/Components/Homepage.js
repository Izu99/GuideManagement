import React, {Component} from 'react'
import '../Styles/HomePage.css'

export default class HomePage extends Component {
  render() {
  return (
    <div className='homepage-Image'>
      <h2>Find Your Tour Guide</h2>
      <button type='submit'><a href='/guidemale'> Male Guides </a></button>

      <button type='submit'><a href='/guidefemale'> Female Guides </a></button>
    </div>
  )
}
}