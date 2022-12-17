import React from 'react';
import '../styles/CreateForm.css';
function CreateForm() {
  return (
    <div className='create-songs'>
        <div className='details'>
            <h2>Create your NFT</h2>
            <form>
            <label>
                ISRC Number
            </label>
                <input type='text' placeholder='Enter ISRC number'/>
            <label>
                Song Name
            </label>
                <input type='text' placeholder='Enter Song name'/>
            <label>
                Artist Name
            </label>
                <input type='text' placeholder='Enter your name'/>
            <label>
                Price
            </label>
                <input type='text' placeholder='Enter Price in MATIC'/>
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
                <select name="genre" id="genre">
                    <option value="">Pop</option>
                    <option value="">Rap</option>
                    <option value="">Classical</option>
                    <option value="">Indian</option>
                    <option value="">Cultural</option>
                </select>
        </div>
        <div className='details'>
            <h2>Other Details</h2>
        </div>
        </div>
    </div>
  )
}

export default CreateForm
