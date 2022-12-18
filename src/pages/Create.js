import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Create.css';
import CreateForm from '../components/CreateForm';
import Footer from '../components/Footer';
function Create() {
  return (
    <div className='create'>
        <Navbar/>
        <CreateForm/>
        <Footer/>
    </div>
  )
}

export default Create
