import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginForm from './Components/LoginForm';
import NewAcct from './Components/NewAcct';
import DashBoardEmployee from './Components/DashBoardEmployee';
import HomePage from './Components/HomePage';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/DashBoardEmployee" element={<DashBoardEmployee/>}/>
      <Route path="/LoginForm" element={<LoginForm/>}/>
      <Route path="/NewAcct" element={<NewAcct/>}/>
    </Routes>
    </div>
  );
}

export default App;