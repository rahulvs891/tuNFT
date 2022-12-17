import React, { useState } from "react";
import "../styles/CreateForm.css";
function CreateForm() {
  const [status, setStatus] = useState("yes");
  const selectHandler = () => {
    if (status === "yes") {
      setStatus("no");
    } else {
      setStatus("yes");
    }
  };
  return (
    <div className="create-form">
        <form  method="post" enctype="multipart/form-data">
    <div className="create-songs">
      <div className="details">
        <h2>Create your NFT</h2>
        <input type="file" name="fileToUpload" id="fileToUpload"/>
          <label>ISRC Number</label>
          <input type="text" placeholder="Enter ISRC number" />
          <label>Song Name</label>
          <input type="text" placeholder="Enter Song name" />
          <label>Artist Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Price</label>
          <input type="text" placeholder="Enter Price in MATIC" />
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
          <select name="genre" id="genre" value="select here">
            <option value="">select here</option>
            <option value="">Pop</option>
            <option value="">Rap</option>
            <option value="">Classical</option>
            <option value="">Indian</option>
            <option value="">Cultural</option>
          </select>
        </div>
        <div className="details">
          <h2>Other Details</h2>
          <label>Type of song</label>
          <select name="genre" id="genre" value="select here">
            <option value="">select here</option>
            <option value="">Metaphorical</option>
            <option value="">Literal</option>
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
              <select name="genre" id="genre" value="select here">
                <option value="">select here</option>
                <option value="">Rhyming</option>
                <option value="">Non-Rhymimg</option>
              </select>
              <label>Lyrics</label>
              <input type="text" id="para" />
            </>
          )}
          <label>Background</label>
          <input type="text" id="para" />
        </div>
        <div className="details">
          <label>Frequency Type</label>
          <select name="genre" id="genre" value="select here">
            <option value="">select here</option>

            <option value="">select here</option>
            <option value="">Bass heavy</option>
            <option value="">Treble heavy</option>
            <option value="">Mids heavy</option>
          </select>
          <label>Is the song sample based?</label>
          <select name="genre" id="genre" value="select here">
            <option value="">select here</option>
            <option value="">Yes</option>
            <option value="">No</option>
          </select>
          <label>Type Of Instruments used</label>
          <select name="genre" id="genre" value="select here">
            <option value="">select here</option>
            <option value="">Real Instruments</option>
            <option value="">Digital Instruments</option>
          </select>
        </div>
      </div>
    </div>
    <div className="create-submit">
        <input type="submit" value="Submit" name="submit" id="submit" />
    </div>
      </form>
      </div>
  );
}

export default CreateForm;
