import './App.css';
import React from 'react';
import CreateAccount from './Components/CreateAccount';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Entertainment from './Pages/Entertainment';

function App() {
  return (
    <>
    <CreateAccount />
    <Routes>
      <Route path="/" element={<Register />}/>
      <Route path="/" element={<Entertainment />}/>
    </Routes>
    </>
   
  );
}

export default App;
