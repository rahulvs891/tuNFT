import React, { useState, useEffect, Fragment , useRef} from "react";
import Navbar from "../components/Navbar";
import { BigNumber, providers, utils, Contract } from "ethers";
import Web3Modal from "web3modal";

const Landing = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const connectWallet = async()=>{
    try{
      await getProviderOrSigner();
      setWalletConnected(true);
    }
    catch(err){
      console.error(err);
    }
  };
  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      Web3Modal.current = new Web3Modal({
        network: "rinkeby",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);
  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await Web3Modal.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Rinkeby network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
      window.alert("Change the network to polygon mumbai");
      throw new Error("Change network to polygon mumbai");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };
  const renderButton = () => {
    // If wallet is not connected, return a button which allows them to connect their wllet
    if (!walletConnected) {
      return (
        <button onClick={connectWallet}>
          Connect your wallet
        </button>
      );
    }
  }
  return (
    <>
      <Navbar/>
      <button onClick={connectWallet}>
          Connect your wallet
      </button>
    </>
  );
};

export default Landing;
