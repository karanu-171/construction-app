import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/profile-icon.png';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [technician, setTechnician] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:4000/technician")
    .then(async (res) =>{
      setTechnician(res.data)
      console.log(res.data)
    }).catch((err) =>{
      console.log(err)
    })
  },[])
  console.log(technician)

  
  return (
    <div className='Profile'>
    <div className='container'>
    <div className='row'>
     <div className='col-md-4 mt-3'>
      <div className='card text-center sidebar bg-dark'>
      <div className='card-body'>
        <img src={profile} alt='logo' className='rounded-circle' width='150'/>
        <div className='mt-3'>
        <h3>John karanu</h3>
        <div className='mt-3'>
        <Link to='/' className='prof-link'>Home</Link>
        <Link to='/workers' className='prof-link'>Workers</Link>
        <Link to='/contact' className='prof-link'>Contact</Link>
        <Link to='/login' className='prof-link'>Logout</Link>
        </div>
        </div>
      </div>
      </div>
     </div>
     <div className='col-md-8 mt-3'>
      <div className='card mb-3 content'>
        <h1 className='m-3 pt-3'>About</h1>
        <div className='card-body'>
          <div className='row'>
           <div className='col-md-3'>
            <h5>Full Name</h5>
           </div>
           <div className='col-md-9 text-secondary'>
            John karanu
           </div>
          </div>
          <hr/>
          <div className='row'>
          <div className='col-md-3'>
           <h5>Email</h5>
          </div>
          <div className='col-md-9 text-secondary'>
           karanujohn171@gmail.com
          </div>
         </div>
         <hr/>
         <div className='row'>
         <div className='col-md-3'>
          <h5>Phone Number</h5>
         </div>
         <div className='col-md-9 text-secondary'>
          0702477708
         </div>
        </div>
        <hr/>
        <div className='row'>
        <div className='col-md-3'>
         <h5>Location</h5>
        </div>
        <div className='col-md-9 text-secondary'>
         Nyeri, kimathi
        </div>
       </div>
        </div>
      </div>
        <div className='card mb-5 content'>
        <h1 className='m-3'>Recent Project</h1>
        <div className='card-body'>
        <div className='row'>
         <div className='col-md-3'>
          <h5>Project Name</h5>
         </div>
         <div className='col-md-9 text-secondary'>
          Project Description
         </div>
        </div>
        </div>
        </div>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Profile