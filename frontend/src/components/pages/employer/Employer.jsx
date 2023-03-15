import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerEmployer } from '../../../redux/actions/employerActions';
import './Employer.css';
import { toast } from 'react-toastify';

const Employer = () => {
  const [employerData, setEmployerData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    location: '',
    password: '',
    confirmPassword: '',
  }) 

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const employerAuth = useSelector((state) => state.employerReducer);

  useEffect(() => {
    if (employerAuth.employer._id) {
      navigate("/");
    }
  }, [employerAuth.employer._id, navigate]);

  const employerChange = (e) => {
    setEmployerData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  

  const employerSubmit = (e) => {
    e.preventDefault()
    if(employerData.password !== employerData.confirmPassword){
      return toast.error('Password do not match')
    }else{
    console.log(employerData)
    dispatch(registerEmployer(employerData));
    }
   }

  return (
    <div className="Employer2">
      <div className="main2">
        <h1>Employer</h1>
        <div className="form-2">
          <form onSubmit={employerSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="fullName"
                value={employerData.fullName}
                onChange={employerChange}
                placeholder="Enter your fullName"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                value={employerData.email}
                onChange={employerChange}
                placeholder="Enter your email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="phoneNumber"
                value={employerData.phoneNumber}
                onChange={employerChange}
                placeholder="Enter your phone number"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="location"
                value={employerData.location}
                onChange={employerChange}
                placeholder="Enter your location"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                value={employerData.password}
                onChange={employerChange}
                placeholder="Enter your password"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="confirmPassword"
                value={employerData.confirmPassword}
                onChange={employerChange}
                placeholder="Confirm password"
                className="form-control"
              />
            </div>
            <div className="div2-c">
              <button type="submit" className=" btn btn-primary">
                CREATE ACCOUNT
              </button>
            </div>
            <div className="oop-2">
              <Link to="/Login" className="back-2">
                Already have an account?Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Employer