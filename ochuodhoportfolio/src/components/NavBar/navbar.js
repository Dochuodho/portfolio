import React from 'react';
import './navbar.css';
import logo from '../../assets/mylogo.png';
import { Link } from 'react-scroll';
import contactIm from '../../assets/Message-Download-Free-PNG.png';


function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Clients</Link>
            
            

        </div>
        <button className="desktopMenuBtn">
            <img src={contactIm} alt="" className="desktopMenuImg" />Contact Me</button>

    </nav>

    
  )
}

export default Navbar
