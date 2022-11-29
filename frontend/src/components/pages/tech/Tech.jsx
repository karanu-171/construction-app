import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { registerTechnician } from '../../../redux/actions/technicianActions';
import './Tech.css'
import { toast } from 'react-toastify';

const Tech = () => {

    const [technicianData, setTechnicianData] = useState({
        fullName: '', phoneNumber: '', email: '', password: '',
        confirmPassword: '', idNumber: '', experience: '', location: '',
         refereeName: '', refereeNumber: '', gender: '', registerAs:'',
         })

    const [specialization, setSpecialization] = useState('architecture')

    const [profile, setProfile] = useState('')
    const [idPhoto, setIdPhoto] = useState('')


        const navigate = useNavigate()
        const dispatch = useDispatch()
        const technicianAuth = useSelector((state) => state.technicianReducer);

        useEffect(() => {
          if (technicianAuth.technician._id) {
            navigate("/");
          }
        }, [technicianAuth.technician._id, navigate]);

      const technicianChange = (e) => {
        setTechnicianData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value, 
        }))
      }


      const profileChange = async (e) =>{
        const file = e.target.files[0]
        set(file)
        console.log(file)
      }

      const idChange = async (e) =>{
        const files = e.target.files[0]
        sets(files)
        console.log(files)
      }

      const set = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () =>{
          setProfile(reader.result);
        }
      }

      const sets = (files) =>{
        const readers = new FileReader();
        readers.readAsDataURL(files)
        readers.onloadend = () =>{
          setIdPhoto(readers.result);
        }
      }

    
      const technicianSubmit = (e) => {
        e.preventDefault()
        if(technicianData.password !== technicianData.confirmPassword){
          return toast.error('Password do not match')
        }else{
        const tech ={
          
          fullName: technicianData.fullName, phoneNumber: technicianData.phoneNumber, 
          email: technicianData.email, password: technicianData.password, 
          confirmPassword: technicianData.confirmPassword, 
          idNumber: technicianData.idNumber, experience: technicianData.experience,
          location:  technicianData.location, refereeName: technicianData.refereeName, 
          refereeNumber: technicianData.refereeNumber, gender: technicianData.gender, 
          registerAs:technicianData.registerAs, profile : profile, 
          idPhoto: idPhoto, specialization:specialization, 
          
        }
        console.log(tech)
        dispatch(registerTechnician(tech));
      }
       }
  return (
    <div className='Tech'> 
    <h1>Technician</h1>
    <div className='forms'>
    <form onSubmit={technicianSubmit}>
    <div className='mb-3'>
    <input type='text' name='fullName' value={technicianData.fullName} onChange={technicianChange} placeholder='Enter your fullName' className='form-control'/></div>
    <div className='mb-3'>
    <input type='text' name='email' value={technicianData.email} onChange={technicianChange} placeholder='Enter your email' className='form-control'/></div>
    <div className='mb-3'>
    <input type='text' name='phoneNumber' value={technicianData.phoneNumber} onChange={technicianChange} placeholder='Enter Phone Number' className='form-control'/></div>
    <div className='mb-3'>
    <input type='password' name='password' value={technicianData.password} onChange={technicianChange} placeholder='Enter your password' className='form-control'/></div>
    <div className='mb-3'>
    <input type='password' name='confirmPassword' value={technicianData.confirmPassword} onChange={technicianChange} placeholder='Confirm password' className='form-control'/></div>
    <div className='some'>
    <div><label className='label'>Gender</label></div>
    <div><input type='radio' name='gender' value="male" checked={technicianData.gender === "male"} onChange={technicianChange} className='radio'/> Male</div>
    <div><input type='radio' name='gender' value= "female" checked={technicianData.gender === "female"} onChange={technicianChange} className='radio'/> Female</div>
    </div>
    <div className=' mt-3 mb-3'>
    <input type='text' name='location' value={technicianData.location} onChange={technicianChange} placeholder='Nyeri, kimathi' className='form-control'/></div>
    <div className=' mb-3'>
    <input type='text' name='idNumber' value={technicianData.idNumber} onChange={technicianChange} placeholder='Enter your Id number' className='form-control'/></div>
    <div className='group'>
    <div><label className='id-1' htmlFor='front'>Profile</label></div>
    <div><input type='file' name='profile'  onChange={profileChange} className='hide' id="front"/></div>
    <div><label htmlFor="back" className='id-2'>ID Photo</label></div>
    <div><input type='file' name='idPhoto'  onChange={idChange} className='hide' id='back'/></div>
    </div>
    <div className='some'>
    <div><label className='label'>Register As</label></div>
    <div><input type='radio' name='registerAs' value= "Professional" checked={technicianData.registerAs === "Professional"} onChange={technicianChange} className='radio'/>Professional</div>
    <div><input type='radio' name='registerAs' value= "Apprenticeship" checked={technicianData.registerAs === "Apprenticeship"} onChange={technicianChange} className='radio'/>Apprenticeship</div>
    </div>
    <div className='drop'>
    <div><label className='label'>Specialization</label></div>
    <div className='option-1'>
    <select name= 'specialization' value={specialization} onChange={(e) => setSpecialization(e.target.value) } className='options'>
    <option  value="architecture">Architecture</option>
    <option  value="mason">Mason</option>
    <option value="welder">Welder</option>
    <option value="electrician">Electrician</option>
    </select>
    </div>
    </div>
    <div className='mb-3'>
    <input type='text' name='experience' value={technicianData.experience} onChange={technicianChange} placeholder='years of experience' className='form-control'/></div>
    <div className='mb-3'>
    <input type='text' name='refereeName' value={technicianData.refereeName} onChange={technicianChange} placeholder='Referee Name' className='form-control'/></div>
    <div className='mb-3'>
    <input type='text' name='refereeNumber' value={technicianData.refereeNumber} onChange={technicianChange} placeholder='Referee Number' className='form-control'/></div>
    <div className='div-c'><button type='submit' className='btn btn-primary'>CREATE ACCOUNT</button></div>
    <div className='oop'>
    <Link to='/Login' className='back'>Already have an account?Sign In</Link>
    </div>
    </form>
    </div>

    </div>
  )
}

export default Tech