import React from 'react';
import '../styles/Library.css';
import { Link, NavLink } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import trending from '../assets/trending-music.png';
import { BsSearch } from 'react-icons/bs';
import { FaAngleDoubleRight} from 'react-icons/fa';
function Library() {
  return (
    <div className='library'>
        <Navbar/>
        <div className='filter-card'>
            <form>
            <div className='card-header'>
                <h3 style={{color:"white"}}>tuNft Library</h3>
                <input type='text' id='search' placeholder='Search by Name or ID'/>
            </div>
            <label>Filters:</label>
            <div className='filter-select'>
            <select name="genre" id="genre" >
            <option value="">Genre: Any</option>
            <option value="pop">Pop</option>
            <option value="rap">Rap</option>
            <option value="classical">Classical</option>
            <option value="indian">Indian</option>
            <option value="cultural">Cultural</option>
          </select>
            <select name="lyrics" id="genre">
            <option value="">Lyrics: Any</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
            <select name="instruments-used" id="genre" style={{width:"20rem"}}>
            <option value="">instruments used: select here</option>
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
          <button type='submit' style={{background:"transparent",border:"none"}}><BsSearch style={{color:"#EA06F8",fontSize:"2rem"}}/></button>
          </div>
            </form>
        </div>
        <h1 className='no-songs'>No songs to display</h1>
        <div className='box'>
            <div className='lt-box'>
                <h3>Start Creating Digital Music for the new Blockchain Era</h3>
                <div className='subbox'>
                    <Link to='/dashboard'><button>Dashboard</button></Link>
                    <Link to='/Create'><button>Create</button></Link>
                </div>
            </div>
            <div className='rt-box'>
                <img src={trending}/>
                <h4 style={{color:"#EA06F8"}}>Trending <FaAngleDoubleRight/></h4>
                <h4 style={{color:"#D3D3D3",textAlign:"center"}}>Explore a rich gallery of Digitak Music</h4>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Library
