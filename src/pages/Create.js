import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Create.css';
import CreateForm from '../components/CreateForm';
function Create() {
  return (
    <div className='create'>
        <Navbar/>
        <CreateForm/>
    </div>
  )
}

export default Create
