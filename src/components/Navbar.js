<<<<<<< HEAD
import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import { NavLink} from 'react-router-dom';

=======
import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import { MdOutlineSegment } from "react-icons/md";
>>>>>>> eecd7710ab8eac0bde64e568c1030fa3887dd08e
function Navbar() {
  let activeStyle = {
    textDecoration:"underline",
    color:"#EA06F8"
  }
  return (
    <div className='navbar'>
    <img src={logo} className='logo'/>
    <ul>
        <NavLink to='/' style={({isActive})=>isActive ? activeStyle : undefined}><li>Home</li></NavLink>
        <NavLink to='/library' style={({isActive})=>isActive ? activeStyle : undefined}><li>Library</li></NavLink>
        <NavLink to='/trending' style={({isActive})=>isActive ? activeStyle : undefined}><li>Trending</li></NavLink>
    </ul>
    <ul>
        <NavLink to='/create' style={({isActive})=>isActive ? activeStyle : undefined}><li>Create</li></NavLink>
        <NavLink to='/dashboard' style={({isActive})=>isActive ? activeStyle : undefined}><li>Dashboard</li></NavLink>
    </ul>
</div>
  )
}

export default Navbar;
