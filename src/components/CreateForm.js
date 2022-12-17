import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import '../styles/CreateForm.css';
import { BigNumber, providers, utils } from "ethers";
import Web3Modal from "web3modal";
import {
    CONTRACT_ABI,
    CONTRACT_ADDRESS,
  } from "../constants";
function CreateForm() {
    const [showCreateError, setShowCreateError] = useState(false);
	const [spotifyAPIToken, setSpotifyAPIToken] = useState("");
	const [isrcNumber, setIsrcNumber] = useState("");
	const [songName, setSongName] = useState("");
	const [artistName, setArtistName] = useState("");
	const [songPrice, setPrice] = useState("");
	const [instrumentsUsed, setInstrumentsUsed] = useState([]);
	const [links, setLinks] = useState({
		spotifyLink: "",
		appleMusicLink: "",
		amazonMusicLink: "",
		youtubeMusicLink: "",
	});
    const createSong = async () => {
        try {
          // Get the signer from the provider
          const signer = await getProviderOrSigner(true);
    
          // Create a new instance of the contract
          const contract = new ethers.Contract(
            CONTRACT_ADDRESS,
            CONTRACT_ABI,
            signer
          );
    
          // Get the price of the NFT in Wei
          const price = utils.parseEther(songPrice);
    
          // Create the NFT
          const transaction = await contract.createSong(
            songName,
            artistName,
            songPrice,
            instrumentsUsed,
            links
          );
          await transaction.wait();
          setShowCreateError(false);
        } catch (err) {
          console.error(err);
          setShowCreateError(true);
        }
      }
      const connectWallet = async()=>{
        try{
          await getProviderOrSigner();
          setWalletConnected(true);
        }
        catch(err){
          console.error(err);
        }
      };
      const getProviderOrSigner = async (needSigner = false) => {
        // Connect to Metamask
        // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);
    
        // If user is not connected to the Rinkeby network, let them know and throw an error
        const { chainId } = await web3Provider.getNetwork();
        if (chainId !== 4) {
          window.alert("Change the network to Rinkeby");
          throw new Error("Change network to Rinkeby");
        }
    
        if (needSigner) {
          const signer = web3Provider.getSigner();
          return signer;
        }
        return web3Provider;
      };

      useEffect(() => {
        // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
        if (!walletConnected) {
          // Assign the Web3Modal class to the reference object by setting it's `current` value
          // The `current` value is persisted throughout as long as this page is open
          web3ModalRef.current = new Web3Modal({
            network: "rinkeby",
            providerOptions: {},
            disableInjectedProvider: false,
          });
          connectWallet();
          getAmounts();
        }
      }, [walletConnected]);

  return (
    <div className='create-songs'>
        <div className='details'>
            <h2>Create your NFT</h2>
            <form>
            <label>
                ISRC Number
            </label>
                <input type='text' placeholder='Enter ISRC number' value={ isrcNumber } onChange = {handleChange}
					required/>
            <label>
                Song Name
            </label>
                <input type='text' placeholder='Enter Song name' value = {songName} onChange = {handleChange} />
            <label>
                Artist Name
            </label>
                <input type='text' placeholder='Enter your name' value = {artistName} onChange = {handleChange} />
            <label>
                Price
            </label>
                <input type='text' placeholder='Enter Price in MATIC' value = {songPrice} onChange = {handleChange} />
            </form>
        </div>
        <div className='song-details'>
        <div className='details'>
                <h2>Upload your song</h2>
                <label>
                Add Link(Optional)
                </label>
                <input type='text' placeholder='spotify'/>
                <input type='text' placeholder='Apple Music'/>
                <input type='text' placeholder='Amazon Music'/>
                <input type='text' placeholder='Youtube Music'/>
                <label>
                Genre
                </label>
                <select name="genre" id="genre" value="select here">
                    <option value="">select here</option>
                    <option value="">Pop</option>
                    <option value="">Rap</option>
                    <option value="">Classical</option>
                    <option value="">Indian</option>
                    <option value="">Cultural</option>
                </select>
        </div>
        <div className='details'>
            <h2>Other Details</h2>
            <label>
                Type of song
                </label>
                <select name="genre" id="genre" value="select here">
                    <option value="">select here</option>
                    <option value="">Metaphorical</option>
                    <option value="">Literal</option>
                </select>
            <label>
                Want to upload lyrics
            </label>
            <div className='yes-no'>
            <label>yes
            <input id='radio'type='radio'/>
            </label>
            <label>no
            <input id='radio'type='radio'/>
            </label>
            </div>
            <label>
            Type of Lyrics
            </label>
            <select name="genre" id="genre" value="select here">
                <option value="">select here</option>
                <option value="">Rhyming</option>
                <option value="">Non-Rhymimg</option>
            </select>
            <label>
            Lyrics
            </label>
            <input type='text' id='para'/>
            <label>
            Background
            </label>
            <input type='text' id='para'/>
        </div>
        <div className='details'>
            <label>
            Frequency Type
            </label>
            <select name="genre" id="genre" value="select here">
                <option value="">select here</option>
                
                <option value="">select here</option>
                <option value="">Bass heavy</option>
                <option value="">Treble heavy</option>
                <option value="">Mids heavy</option>
            </select>
            <label>
            Is the song sample based?
            </label>
            <select name="genre" id="genre" value="select here">
                <option value="">select here</option>
                <option value="">Yes</option>
                <option value="">No</option>
            </select>
            <label>
            Type Of Instruments used
            </label>
            <select name="genre" id="genre" value="select here">
                <option value="">select here</option>
                <option value="">Real Instruments</option>
                <option value="">Digital Instruments</option>
            </select>
        </div>
        </div>
    </div>
  )
}

export default CreateForm
