import { Contract, providers, utils } from "ethers";
import React, { useState } from 'react'
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../constants/index";

const accountFn = async()=>{
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",

    });


    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();




    const buidl11 = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    return buidl11 
  }
export default accountFn