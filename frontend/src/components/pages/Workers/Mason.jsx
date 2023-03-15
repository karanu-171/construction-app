import React, { useState, useEffect } from 'react';
import{ Link } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import './Workers.css';

const Mason = () => {
  const [technicians, setTechnicians] = useState([])
  const stars = Array(5).fill()

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
    <div className="Workers">
      <div>
        <Link to="/architecture" className="link-work ">
          Architecture
        </Link>
        <Link to="/mason" className="link-work">
          Masons
        </Link>
        <Link to="/welder" className="link-work">
          Welder
        </Link>
        <Link to="/electrician" className="link-work">
          Electrician
        </Link>
      </div>
      <div className="work-1">
        <h2 className="text-center mb-3">Masons</h2>
        <div className="container">
          <div className="row g-3">
            {technicians
              .filter((technician) =>
                technician.specialization.toLowerCase().includes("mason")
              )
              ?.map((technician, index) => (
                <div className="col-md-3" key={index}>
                  <Link to={`/view/${technician._id}`} className="link-work-1">
                    <div className="card border border-primary">
                      <div>
                        <img
                          src={technician.profile}
                          alt="arch-2"
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <div>
                          <h5 className="card-title">{technician.fullName}</h5>
                        </div>
                        <div>
                          <p className="card-text">{technician.registerAs}</p>
                        </div>
                        <div>
                          <p className="card-text">{technician.location}</p>
                        </div>
                        <div>
                          <p className="card-text">
                            <FaStar size={24} className="fa me-3" /> {3}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mason