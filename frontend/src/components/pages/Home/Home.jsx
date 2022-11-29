import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
    <div className='container-xxl'>
    <div className='row'>
    <div className='col-6 mt-3'>
    <div className='bg-white p-4 '>
    <h2 className='h2'>Mega Construct</h2>
    </div>
    <div className='mt-4'>
    <p className='text-white display-5  fw-bold'>We are a construction company that provides a platform for worker to gain employment</p>
    </div>
    <div className='mt-4 me-5'> 
    <Link to='/login' className='home-links'>Get started</Link>
    </div>
    </div>
    <div className='col-6 mt-5 mb-5 p-5'>
    <img src='imma.jpg' alt='kill' className='img-fluid' width='600px' height='450px'/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home