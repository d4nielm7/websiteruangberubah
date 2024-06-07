import React from 'react'
import './header.css'
import small_logo from '../../assets/smalllogo.png'


const header = () => {
  return (
    <div className='head'>
      <img src= {small_logo} alt="" className='logo'/>

      <ul>
        <li><a href="#About">About us</a></li>
        <li><a href="service">Service</a></li>
        <li><a href="#myproject">contact</a></li>
      </ul> 

      <button className='signup-button'>Sign Up</button>
    </div>
  )
}

export default header
