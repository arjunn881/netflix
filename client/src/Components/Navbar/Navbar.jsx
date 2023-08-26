import React from 'react'
import './Navbar.scss';
import Logo from '../../Asset/Logo.png';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <img src={Logo} alt="" />
                <span>Home</span>
                <span>Series</span>
                <span>News and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">

            </div>
        </div>
    </div>
  )
}
