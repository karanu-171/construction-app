import React, { useState, useEffect } from 'react';
import{ Link } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import './Workers.css';

const Electrician = () => {
  const [technicians, setTechnicians] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:4000/technician")
    .then(async (res) =>{
      setTechnicians(res.data)
      console.log(res.data)
    }).catch((err) =>{
      console.log(err)
    })
  },[])
  console.log(technicians)
  
  return (
    <div className='Workers'>
    <div>
    <Link to='/architecture' className='link-work'>Architecture</Link>
    <Link to='/mason' className='link-work'>Masons</Link>
    <Link to='/welder' className='link-work'>Welder</Link>
    <Link to='/electrician' className='link-work'>Electrician</Link>
    </div>
    <div className='work-1'>
    <h2>Electricians</h2>
     <div className='container'>
     <div className='row g-3'>
     <Link to='worker/view/:id' className='link-work-1'>
     {technicians.filter(technician=> technician.specialization.toLowerCase().includes("electrician"))
     ?.map((technician, index)=>(
       <div className='col-md-3' key={index}>
       <Link to='/:id' className='link-work-1'>
     <div className='card border border-primary' >
        <div><img src={technician.profile} alt='arch-2' className='img-fluid' /></div>
        <div className='card-body'>
        <div><h5 className='card-title'>{technician.fullName}</h5></div>
        <div><p className='card-text'>{technician.registerAs}</p></div>
        <div><p className='card-text'>{technician.location}</p></div>
        <div><p className='card-text'>
        </p> {3}</div>
        </div>
     </div>
     </Link>
     </div>
     ))}
     </Link>
     </div> 
     </div>
     </div>
    </div>   
  
  )
}

export default Electrician