import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import profile from '../../images/profile-icon.png';
// import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import './Profile.css';
import { signOutEmployer } from "../../../redux/actions/employerActions";

const Profile = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.technicianReducer);
  const users = useSelector((state) => state.employerReducer);
  console.log(user)
  console.log(users)

  // useEffect(()=>{
  //   axios.get("http://localhost:4000/technician")
  //   .then(async (res) =>{
  //     setTechnician(res.data)
  //     console.log(res.data)
  //   }).catch((err) =>{
  //     console.log(err)
  //   })
  // },[])

  useEffect(() => {
    try {
    if (!user) {
      navigate("/");
    } else {
      setFullName(user.technician.fullName);
      setEmail(user.technician.email);
      setPhoneNumber(user.technician.phoneNumber);
      setLocation(user.technician.location);
    }  
    } catch (error) {
      try {
        if (!users) {
          navigate("/");
        } else {
          setFullName(users.employer.fullName);
          setEmail(users.employer.email);
          setPhoneNumber(users.employer.phoneNumber);
          setLocation(users.employer.location);
        }
      } catch (error) {
        console.log(error)
      }
    }
    
  }, [navigate, user, users]);
  
const logoutHandler = () => {
  dispatch(signOutEmployer());
  navigate("/");
};

  
  return (
    <div className="Profile">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-3">
            <div className="card text-center sidebar bg-dark">
              <div className="card-body">
                <img
                  src={profile}
                  alt="logo"
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h3>{user.technician.fullName || users.employer.fullName}</h3>
                  <div className="mt-3">
                    <Link to="/" className="prof-link">
                      Home
                    </Link>
                    <Link to="/workers" className="prof-link">
                      Workers
                    </Link>
                    <Link to="/contact" className="prof-link">
                      Contact
                    </Link>
                    <button onClick={logoutHandler} className="prof-button">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-4 profs">
            <div className="card mb-3 content">
              <h1 className="m-3 pt-3">About</h1>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Full Name</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    {user.technician.fullName || users.employer.fullName}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Email</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    {user.technician.email || users.employer.email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Phone Number</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    {user.technician.phoneNumber || users.employer.phoneNumber}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <h5>Location</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    {user.technician.location || users.employer.location}
                  </div>
                </div>
                <hr />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile