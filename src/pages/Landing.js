import React from "react";
import {NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import musicplayer from "../assets/musicplayer.png";
import forms from "../assets/forms.png";
import '../styles/Landing.css';
import Footer from "../components/Footer";
const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <div >
      <div className="landing-animation">
        <div className="moto">
        <h1>tuNFT</h1>
        <h3>MINT THE MUSIC</h3>
        </div>
      <div className="loader">
          <span>dadasda</span>
          <span></span>
          <span></span>
          <span></span>
      </div>
      </div>
      <div className="about-site">
            <img src={musicplayer} alt="offer-img"/>
            <div className="content">
            <h1>Create and Sell your Music as an NFT</h1>
            <p>We aim to uplift musicians by enabling them to create NFTs of thier music. We intend to provide them with royalties and recognition that they deserve but are not able to get enough from other sources.<br/>We aim to uplift musicians by enabling them to create NFTs of thier music.</p>
            </div>
    </div>
      <div className="about-create">
            <img src={forms} alt="offer-img"/>
            <div className="create-content">
            <h1>Creating NFTs is so easy</h1>
            <p>Making the process of Creating and Selling NFTs easy has always been our main goal. Our website UI places things that matter the most.</p>
            <NavLink to="/create" className="unactive" activeClassName="active">
        <button name="submit" id="submit">create</button>
        </NavLink>
            </div>
    </div>
      </div>
    <Footer/>
    </div>
  );
};

export default Landing;
