import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Photos/instalogo.png"
import "./navbar.css"
export default function Navbar() {
    return (
        <div className='navbar'>
            <img src={logo} />
            <ul className='nav-menu'>
                <Link to="/Signup"> <li>
                    Signup
                </li></Link>
                <Link to="/Signin"> <li>
                    SignIn
                </li></Link>
                <Link to="/profile"> <li>
                    Profile
                </li></Link>
            </ul>
        </div>
    )
}
