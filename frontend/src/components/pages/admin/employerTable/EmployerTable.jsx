import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './EmployerTable.css';

const EmployerTable = () => {

  const [employers, setEmployers] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:4000/employer")
    .then(async (res)=>{
      setEmployers(res.data)
    }).catch((err) =>{
      console.log(err)
    })
  })
  return (
    <div className='container'>
    <h1 className='TH1'>Employer Table</h1>
    <div className='col-md-10 mx-auto'>
    <table className='table table-hover'>
     <thead className='text-white bg-dark'>
     <tr>
      <th>#</th>
      <th>fullName</th>
      <th>PhoneNumber</th>
      <th>Email</th>
     
      </tr>
     </thead>
     <tbody>
     {employers.map((employer,id)=>(
     <tr key={id}>
     <td>{id+1}</td>
     <td>{employer.fullName}</td>
     <td>{employer.phoneNumber}</td>
     <td>{employer.email}</td>
      
      </tr>
      ))}
     </tbody>
    </table>
    </div>
    </div>
  )
}

export default EmployerTable
