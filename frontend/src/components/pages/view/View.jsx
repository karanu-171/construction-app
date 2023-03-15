import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import './View.css'


const View = () => {
  const { id } = useParams();
    const [technician, setTechnician] = useState("")

    useEffect(()=>{
      axios.get(`http://localhost:4000/technician/${id}`)
      .then(async (res) =>{
        setTechnician(res.data)
        console.log(res.data)
      }).catch((err) => {
        console.log(err.response.data)
      })
    },[id])
    console.log(technician)
  return (
    <div className='View'>
      <div className='container'>
      <div className='row '>
       <div className='col-md-5'>
          <div className='card mt-5'>
          <img src={technician.profile} alt='arch-2' className='img-fluid' />   
          </div>
          </div>
          <div className='col-md-7 mt-5'>
          <div className='row ms-5 mt-4'>
           <div className='col-md-4'>
            <h5>Full Name :</h5>
           </div>
           <div className='col-md-8 text-secondary'>
            {technician.fullName}
           </div>
          </div>
          <div className='row ms-5 mt-4'>
           <div className='col-md-4'>
            <h5>Gender :</h5>
           </div>
           <div className='col-md-8 text-secondary'>
            {technician.gender}
           </div>
          </div>
          <div className='row ms-5 mt-4'>
           <div className='col-md-4'>
            <h5>Registered As :</h5>
           </div>
           <div className='col-md-8 text-secondary'>
            {technician.registerAs}
           </div>
          </div>
          <div className='row ms-5 mt-4'>
           <div className='col-md-4'>
            <h5>Specialization :</h5>
           </div>
           <div className='col-md-8 text-secondary'>
            {technician.specialization}
           </div>
          </div>
          <div className='row ms-5 mt-4'>
           <div className='col-md-4'>
            <h5>location :</h5>
           </div>
           <div className='col-md-8 text-secondary'>
            {technician.location}
           </div>
          </div>
       </div>
       </div>
       <div className='row'>
       <div className='col-md-6'>
       <div className='row ms-3 mt-4'>
        <div className='col-md-4'>
         <h5>referee Name :</h5>
        </div>
        <div className='col-md-8 text-secondary'>
         {technician.refereeName}
        </div>
       </div>
       <div className='row ms-3 mt-4'>
        <div className='col-md-4'>
         <h5>Ratings :</h5>
        </div>
        <div className='col-md-8 text-secondary'>
        <p className=''><FaStar size={24} className='fa me-3'/> {3}</p>
        </div>
        </div> 
        <div className='row'>
        <div className='col-md-5'>
        <p className='fw-bold'> click here to chat</p>
        </div>
        <div className='col-md-5'>
        <Link to='/chat' className='text-decoration-none text-dark'>
        <BsFillChatLeftTextFill size={24}/>
        </Link>
        </div>
        </div>
        </div>
        </div>
       </div>
       </div>
     
      
  )
}

export default View
