import React,{ useState, useEffect} from 'react';
import './TechnicianTable.css';
import axios from 'axios';

const TechnicianTable = () => {

  const [technicians, setTechnicians] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:4000/technician")
    .then(async (res) =>{
      setTechnicians(res.data)
    }).catch((err) =>{
      console.log(err)
    })
  },[])
  
  return (
    <div className='container'>
      <h1 className='HH1'>Technician Table</h1>
      <div className='col-md-10 mx-auto'>
      <table className='table table-hover'>
       <thead className='text-white bg-dark'>
       <tr>
        <th>#</th>
        <th>fullName</th>
        <th>PhoneNumber</th>
        <th>Email</th>
        <th>RegisterAs</th>
        <th>Specialization</th>
        <th>License</th>
        <th>Approve</th>
        </tr>
       </thead>
       <tbody>
       
       {technicians.map((technician, id)=>(
        <tr key={id}>
          <td>{id+1}</td>
          <td>{technician.fullName}</td>
          <td>{technician.phoneNumber}</td>
          <td>{technician.email}</td>
          <td>{technician.registerAs}</td>
          <td>{technician.specialization}</td>
          <td>License</td>
          <td><input type="checkbox" /></td>
          
        </tr>
        ))}
       </tbody>
      </table>
      </div>
    </div>
  )
}

export default TechnicianTable
// <td>
//           <button type='button' className='btn btn-small btn-primary'>Accept</button>
//           <button type='button' className='btn btn-small btn-danger ms-2'>Decline</button>
//           </td>
//<th>Action</th>