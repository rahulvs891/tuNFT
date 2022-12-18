import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  let activeStyle = {
    color: "black",
  };

  let activeClassName = "underline";
  return (
    <div className="navbar">
      <Link to="/"><img src={logo} className="logo" alt="" /></Link>
      <list>
        <NavLink
          to="/trending"
          className="unactive"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Trending
        </NavLink>
        <NavLink
          to="/library"
          className="unactive"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Library
        </NavLink>
        <NavLink
          to="/"
          className="unactive"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
      </list>
      <list>
        <NavLink
          to="/dashboard"
          className="unactive"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Dashboard
        </NavLink>
        <NavLink to="/create" className="unactive" activeClassName="active">
          Create
        </NavLink>
      </list>
    </div>
  );
}

export default Navbar;
