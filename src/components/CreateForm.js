import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import '../styles/CreateForm.css';
function CreateForm() {
    const [status, setStatus] = useState("yes");
    const [file,setFile] = useState('');
    const [isrc,setIsrc] = useState('');
    const [song,setSong] = useState('');
    const [lyrics,setLyrics] = useState('');
    const [artist,setArtist] = useState('');
    const [price,setPrice] = useState('');
    const [genre,setGenre] = useState('');
    const [type,setType] = useState('');
    const [backGround, setBackGround] = useState('');
    const [frequency,setFrequency] = useState('');
    const [based, setBased] = useState('');
    const [instrumentType, setInstrumentType] = useState('');
    const [instrument, setInstrument] = useState('');

    const fileChangeHandler = (event) =>{
        setFile(event.target.value)
    }
    const isrcChangeHandler = (event) =>{
        setIsrc(event.target.value)
    }
    const songChangeHandler = (event) =>{
        setSong(event.target.value)
    }
    const artistChangeHandler = (event) =>{
        setArtist(event.target.value)
    }
    const priceChangeHandler = (event) =>{
        setPrice(event.target.value)
    }
    const lyricChangeHandler = (event) =>{
        setLyrics(event.target.value)
    }
    const genreChangeHandler = (event) =>{
        setGenre(event.target.value)
    }
    const typeChangeHandler = (event) =>{
        setType(event.target.value)
    }
    const backgroundChangeHandler = (event) =>{
        setBackGround(event.target.value)
    }
    const frequencyChangeHandler = (event) =>{
        setFrequency(event.target.value)
    }
    const basedChangeHandler = (event) =>{
        setBased(event.target.value)
    }
    const instrumentTypeChangeHandler = (event) =>{
        setInstrumentType(event.target.value)
    }
    const instrumentChangeHandler = (event) =>{
        setInstrument(event.target.value)
    }

    const selectHandler = () => {
      if (status === "yes") {
        setStatus("no");
      } else {
        setStatus("yes");
      }
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        const enteredData = {
            songfile: file,
            isrcnumber: isrc,
            songname: song,
            artistname: artist,
            pricevalue:price,
            genrename:genre,
            songtype:type,
            lyricsdetails:lyrics,
            backgrounddetails:backGround,
            frequencytype:frequency,
            songbased:based,
            instrumenttype: instrumentType,
            instrumentused:instrument
        };
        console.log(enteredData);
        setFile('');
        setIsrc('');
        setSong('');
        setLyrics('');
        setArtist('');
        setPrice('');
        setGenre('');
        setType('');
        setBackGround('');
        setFrequency('');
        setBased('');
        setInstrumentType('');
        setInstrument('');
    }
  return (
    <div className="create-form">
        <form  method="post" enctype="multipart/form-data" onSubmit={submitHandler}>
    <div className="create-songs">
      <div className="details">
        <h2>Create your NFT</h2>
        <input type="file" name="fileToUpload" id="fileToUpload" onChange={fileChangeHandler}/>
          <label>ISRC Number</label>
          <input type="text" placeholder="Enter ISRC number" onChange={isrcChangeHandler}/>
          <label>Song Name</label>
          <input type="text" placeholder="Enter Song name" onChange={songChangeHandler}/>
          <label>Artist Name</label>
          <input type="text" placeholder="Enter your name" onChange={artistChangeHandler}/>
          <label>Price</label>
          <input type="text" placeholder="Enter Price in MATIC" onChange={priceChangeHandler}/>
      </div>
      <div className="song-details">
        <div className="details">
          <h2>Upload your song</h2>
          <label>Add Link(Optional)</label>
          <input type="text" placeholder="spotify" />
          <input type="text" placeholder="Apple Music" />
          <input type="text" placeholder="Amazon Music" />
          <input type="text" placeholder="Youtube Music" />
          <label>Genre</label>
          <select name="genre" id="genre" onChange={genreChangeHandler}>
            <option value="">select here</option>
            <option value="pop">Pop</option>
            <option value="rap">Rap</option>
            <option value="classical">Classical</option>
            <option value="indian">Indian</option>
            <option value="cultural">Cultural</option>
          </select>
        </div>
        <div className="details">
          <h2>Other Details</h2>
          <label>Type of song</label>
          <select name="genre" id="genre" onChange={typeChangeHandler}>
            <option value="">select here</option>
            <option value="metaphorical">Metaphorical</option>
            <option value="literal">Literal</option>
          </select>
          <label>Want to upload lyrics</label>
          <div className="yes-no">
            <label>
              yes
              <input
                id="radio"
                type="radio"
                onClick={selectHandler}
                checked={status === "yes"}
              />
            </label>
            <label>
              no
              <input
                id="radio"
                type="radio"
                onClick={selectHandler}
                checked={status === "no"}
              />
            </label>
          </div>

          {status === "yes" && (
            <>
              <label>Type of Lyrics</label>
              <select name="genre" id="genre">
                <option value="">select here</option>
                <option value="rhyming">Rhyming</option>
                <option value="non-rhyming">Non-Rhyming</option>
              </select>
              <label>Lyrics</label>
              <input type="text" id="para" onChange={lyricChangeHandler}/>
            </>
          )}
          <label>Background</label>
          <input type="text" id="para" onChange={backgroundChangeHandler}/>
        </div>
        <div className="details">
          <label>Frequency Type</label>
          <select name="genre" id="genre" onChange={frequencyChangeHandler}>
            <option value="">select here</option>
            <option value="Bass heavy">Bass heavy</option>
            <option value="Treble heavy">Treble heavy</option>
            <option value="Mids heavy">Mids heavy</option>
          </select>
          <label>Is the song sample based?</label>
          <select name="genre" id="genre" onChange={basedChangeHandler}>
            <option value="">select here</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label>Type Of Instruments used</label>
          <select name="genre" id="genre" onChange={instrumentTypeChangeHandler}>
            <option value="">select here</option>
            <option value="Real instruments">Real Instruments</option>
            <option value="Digital Instruments">Digital Instruments</option>
          </select>
          <label>Instruments used</label>
          <select name="genre" id="genre" onChange={instrumentChangeHandler}>
            <option value="">select here</option>
            <option value="Acoustic Guitar">Acoustic Guitar</option>
            <option value="Drums">Drums</option>
            <option value="Violin">Violin</option>
            <option value="Piano">Piano</option>
            <option value="Flute">Flute</option>
            <option value="Electric Guitar">Electric Guitar</option>
            <option value="Keyboard">Keyboard</option>
            <option value="Xylophone">Xylophone</option>
            <option value="Saxophone">Saxophone</option>
          </select>
        </div>
      </div>
    </div>
    <div className="create-submit">
      <div>
        <div className="terms"><input type='checkbox' />I hereby declare that this piece of music is my own creation and if any case of copyright infringement is reported, I will solely be held responsible for the consequences.</div>
        <div className="terms"><input type='checkbox' />I have read all terms of use and the privacy policy and I agree to all of them.</div>
      </div>
        <input type="submit" value="Submit" name="submit" id="submit" />
    </div>
      </form>
      </div>
  );
}

export default CreateForm;
