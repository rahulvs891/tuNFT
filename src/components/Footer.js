import React from 'react';
import logo from '../assets/logo.png';
import {BsInstagram,BsFacebook,BsTwitter} from 'react-icons/bs';
import '../styles/Footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-items'>
        <ul className='list'>
            <li><h3>Quick Links</h3></li>
            <li>Library</li>
            <li>Trending</li>
            <li>FAQ</li>
            <li>Chat</li>
        </ul>
      </div>
      <div className='footer-items'>
        <ul className='list'>
            <li><h3>Acccount</h3></li>
            <li>Dashboard</li>
            <li>Create</li>
            <li>Home</li>
        </ul>
      </div>
      <div className='footer-items'>
        <img src={logo}/>
      </div>
      <div className='footer-items'>
        <ul className='list'>
            <li><h3>Support</h3></li>
            <li>Contact Us</li>
            <li>Report a Bug</li>
        </ul>
      </div>
      <div className='footer-items'>
        <ul className='list'>
            <li><h3>Connect with us</h3></li>
            <li><div className='social'><BsInstagram/><BsFacebook/><BsTwitter/></div></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer