import React, { useState } from 'react';
import './Contact.css';
import { useDispatch } from 'react-redux';
import { saveContact } from '../../../redux/actions/contactActions';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Contact = () => {

  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  let v = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
}
 
  const dispatch = useDispatch()

  const contactChange = (e) => {
    console.log(e.target.value)
    setContactData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, 
    }))

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(contactData !== ''){
      dispatch(saveContact(contactData))
    }
    setContactData(v)
  }

  return (
    <div className='Contact'>
    <div className="container-fluid">
      <div className='otp'>
       <h2 className='text-center mb-4 shadow-sm p-3'>Contact Us:</h2>
      </div>
     <div className='row'>
     <div className='col-md-7 shadow rounded p-5'>
     <div className='row'>
     <div className='col mb-3'>
       <label className='form-label'>First Name</label>
       <input name="firstName" type='text' value={contactData.firstName}className='form-control' placeholder='first name' onChange={contactChange}/>
     </div>
     <div className='col mb-3'>
       <label className='form-label'>Last Name</label>
       <input type='text' name="lastName" value={contactData.lastName} className='form-control' placeholder='last name' onChange={contactChange}/>
     </div>
     </div>
     <div className='mb-3'>
       <label className='form-label'>Email</label>
       <input type='text' name="email" value={contactData.email} className='form-control' placeholder='name@gmail.com' onChange={contactChange}/>
     </div>
     <div className='mb-3'>
       <label className='form-label'>Subject</label>
       <input type='text' name="subject" value={contactData.subject} className='form-control' placeholder='subject' onChange={contactChange}/>
     </div>
     <div className='mb-3'>
       <label className='form-label'>Message:</label>
       <textarea value={contactData.message} name="message" className='form-control' placeholder='write your message' rows='3' onChange={contactChange}></textarea>
     </div>

     <Button variant="primary" onClick={handleSubmit}>
     submit
   </Button>

     </div>
      <div className='col-md-5'>
       <div className='ml-5 mt-3'>
        <img src='home-icon.jpg' alt='home' className='img-fluid'/>
       </div>
      </div>
       
    </div>
    </div>
    </div>
  )
}

export default Contact