import React, { useState } from 'react';
import './Contact.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Contact = () => {

  const [show, setShow] = useState(false);
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
       <input type='text' className='form-control' placeholder='first name'/>
     </div>
     <div className='col mb-3'>
       <label className='form-label'>Last Name</label>
       <input type='text' className='form-control' placeholder='last name'/>
     </div>
     </div>
     <div className='mb-3'>
       <label className='form-label'>Email</label>
       <input type='text' className='form-control' placeholder='name@gmail.com'/>
     </div>
     <div className='mb-3'>
       <label className='form-label'>Subject</label>
       <input type='text' className='form-control' placeholder='subject'/>
     </div>
     <div className='mb-3'>
       <label className='form-label'>Message:</label>
       <textarea name='' className='form-control' placeholder='write your message' rows='3'></textarea>
     </div>

     <Button variant="primary" onClick={handleShow}>
     submit
   </Button>

   <Modal
     show={show}
     onHide={handleClose}
     backdrop="static"
     keyboard={false}
   >
     <Modal.Header closeButton>
       <Modal.Title>Modal title</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       We will get back to you as soon as possible
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button>
       <Button variant="primary">submit</Button>
     </Modal.Footer>
   </Modal>


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