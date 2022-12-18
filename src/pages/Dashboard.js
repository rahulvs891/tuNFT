import React, {useState} from "react";
import Navbar from "../components/Navbar";
import image from "../images/music.svg";
import "../styles/dashboard.css";

const Dashboard = () => {
    const [walletAddress, setWalletAddress] = useState("false")
    async function requestAccount() {
        console.log('requesting account');
        if(window.ethereum){
            console.log('detected');
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                setWalletAddress(accounts[0]);
                console.log(accounts)
            } catch (error) {
                console.log(error);
            }
        }else{
            console.log('wallet not detected');
        }
    }
  return (
    <>
      <Navbar />
      <div className="dashboard-header">
        <div className="dashboard-content">
          <div id="heading">Dashboard</div>
          {walletAddress === "false" && (
            <button className="button" onClick={requestAccount}>
              Connect with Metamask
            </button>
          )}
          {walletAddress !== "false" && (
            <h3 style={{ color: "#E45E84" }}>{walletAddress}</h3>
          )}
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
