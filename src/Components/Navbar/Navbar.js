import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
function Navbar() {
  return (
    <nav>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="link">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Portfolio</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar