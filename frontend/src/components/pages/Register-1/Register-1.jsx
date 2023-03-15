import React from 'react'
import { Link } from 'react-router-dom'
import Tech from '../tech/Tech';
import profile from '../../images/profile-icon.png';
import './Register-1.css';


const RegisterOne = () => {

  return (
    <div className='RegisterOne'>
    <div className='container mt-4'>
     <div className='row justify-content-center'>
     <div className='col-md-5 col-sm-6 text-center oxl'>

      <h1 className='mt-3 ot'>Sign up</h1>
      
     <p className='det'>Fill in details to create an account</p>
     <div className='image'>
      <div className='cont-image'>
        <img src={profile} alt='profile' className='prof-pic'/>
      </div>
      </div>
     <div className='row mt-3 mb-4 justify-content-center'>
     <div className='col-md-5 col-sm-5 link'>
     <Link to='/register-1' className='emp2-1'>Technician</Link>
     </div>
     <div className='col-md-5 col-sm-5 link-2'>
     <Link to='/register-2' className='emp2-2'>Employer</Link>
     </div>
     </div>
     <div className='render2'>
      <Tech/>
     </div>
     </div>
     </div>
     </div>
     </div>
    
  )
}

export default RegisterOne