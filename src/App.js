import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register/Register.jsx';
import Entertainment from './Pages/Entertainment/Entertainment.jsx';
import UserHome from './Pages/UserHome/UserHome.jsx'
import Browse from './Pages/Browse/Browse.jsx';

function App() {
  return (
    <>
    <Routes>
      <Route path="" element={<Register />} />
      <Route path="/entertainment" element={<Entertainment />}/>
      <Route path="/userhome" element={<UserHome />}/>
      <Route path="/browse" element={<Browse />}/>
    </Routes>
    </>
   
  );
}

export default App;
