import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Profile from './components/pages/Profile/Profile';
import Workers from './components/pages/Workers/Workers';
import Login from './components/pages/Login/Login';
import Contact from './components/pages/contact/Contact';
import RegisterTwo from './components/pages/Register-2/Register-2';
import RegisterOne from './components/pages/Register-1/Register-1';
import TechnicianTable from './components/pages/admin/techTable/TechnicianTable';
import EmployerTable from './components/pages/admin/employerTable/EmployerTable';
import Mason from './components/pages/Workers/Mason';
import Welder from './components/pages/Workers/Welder';
import Electrician from './components/pages/Workers/Electrician';
import View from './components/pages/view/View';
import Chat from './components/pages/chat/Chat';
import Login2 from './components/pages/Login/Login2';

// const socket = io.connect
// socket={socket} userName={userName} room={room}
function App() {

  
  return (
    <>
    <Navbar/>
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/architecture' element={<Workers/>}/>
      <Route path='/mason' element={<Mason/>}/>
      <Route path='/welder' element={<Welder/>}/>
      <Route path='/electrician' element={<Electrician/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/login-2' element={<Login2/>}/>
      <Route path='/profile' element={<Profile/>}/> 
      <Route path='/register-1' element={<RegisterOne/>}/> 
      <Route path='/register-2' element={<RegisterTwo/>}/>
      <Route path='/adminTech' element={<TechnicianTable/>}/>
      <Route path='/adminEmp' element={<EmployerTable/>}/>
      <Route path='/chat' element={<Chat/>}/>
     </Routes>
     </div>
     <ToastContainer/>
    </>
  );
}

export default App;
