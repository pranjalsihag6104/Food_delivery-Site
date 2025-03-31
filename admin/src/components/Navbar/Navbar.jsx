import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  console.log("Logo Path:", assets.logo);
  return (
    <div className='navbar'>
      
      <img className='logo' src={assets.logo} alt="Logo" />

      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar