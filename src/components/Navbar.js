import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

import { MdOutlineSegment } from "react-icons/md";
function Navbar() {
  let activeStyle = {
    color: "black",
  };

  let activeClassName = "underline";
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="" />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/library">
          <li>Library</li>
        </Link>
        <Link to="/trending">
          <li>Trending</li>
        </Link>
      </ul>
      <ul>
        <NavLink
          to="/create"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Create
        </NavLink>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/rough">
          <li id="more">
            <MdOutlineSegment />
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
