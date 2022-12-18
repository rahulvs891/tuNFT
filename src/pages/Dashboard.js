import React from "react";
import Navbar from "../components/Navbar";
import image from "../images/music.svg";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-header">
        <div className="dashboard-content">
          <div id="heading">Dashboard</div>
          <button className="button">Connect with Metamask</button>
        </div>
        <div className="dashboard-content">
          <img src={image} alt="" style={{ width: "15rem" }} />
        </div>
      </div>
      <div className="remaining-details">
        <div className="owned-NFTs">
          <div className="nft-heading">Owned By Me</div>
          <p>You don't own any NFT's yet. Go get one!</p>
        </div>
        <div className="created-NFTs">
          <div className="nft-heading">Created By Me</div>
          <p>You haven't created any NFT's yet. Go get one!</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
