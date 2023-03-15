import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginTechnician } from '../../../redux/actions/technicianActions';
import './Login.css';
import profile from '../../images/profile-icon.png';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  }) 

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const technicianAuth = useSelector((state) => state.technicianReducer);
  


  const loginChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
   
    if(technicianAuth.technician._id) {
      console.log(technicianAuth.technician._id);
      
      navigate("/")
    }
  }, [technicianAuth.technician._id,navigate]);

  

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    try {
      
      dispatch(loginTechnician(loginData));
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <div className='Login'>
    <div className='main'>
    <div>
      <div className='image'>
      <div className='cont-image'>
        <img src={profile} alt='profile' className='prof-pic'/>
      </div>
      </div>
       <div>
       <h3>Login Page</h3>
       <form onSubmit={loginSubmit}>
       <div className='first-input'>
       <input type="text" name = 'email' value={loginData.email} onChange = {loginChange} placeholder='Enter email' className='first-logo'/>
       </div>
       <div className='second-input'>
       <input type="password" name = 'password' value={loginData.password} onChange = {loginChange} placeholder='password' className='second-logo'/>
       </div>
       <div className='login-button'>
       <button type='submit' className='log'>Login</button>
       </div>
       <div className='mt-3'>
       <Link to='/login-2' className='forward'>Login as an employer</Link>
       </div>
       <div className='reg'>
       <Link to='/register-1' className='forward'>Don't have an Account? Sign Up</Link>
       </div>
       </form>
       </div>
       </div>
    </div>
    </div>
  )
}

export default Login