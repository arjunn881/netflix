import React, { useState } from 'react'
import './Navbar.scss';
import Logo from '../../Asset/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return ()=> (window.onscroll == null);
  }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
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
                <img src="https://yt3.ggpht.com/GB1oQe4N8wsIv-bTrNn3L7ipqEVP078VO8ORjV-VbcZX3wHXEbKgGNNB2RP_lIA_YU_BZ42MsQ=s600-c-k-c0x00ffffff-no-rj-rp-mo" alt="" />
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
