import React from 'react'
import './Navbar.scss';
import Logo from '../../Asset/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
                <SearchIcon className='icon'/>
                <span>KID</span>
                <NotificationsIcon className='icon'/>
                <img src="" alt="" />
                <div className="profile">
                <ArrowDropDownIcon className='icon'/>
                <div className="options">
                  <span>Settings</span>
                  <span>Logout</span>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
