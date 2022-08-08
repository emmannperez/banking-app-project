import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import NavBar from "./NavBar";
import logInImg from "./logInImg.jpg";
  
function LoginForm() {
  
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [logInUser,setLogInUser]=useState([]);
const navigate=useNavigate();
  
const handleInputChange=(event)=> {
  const {id,value} = event.target;
    if(id==='email'){
      setEmail(value);
    }
    if(id==='password'){
      setPassword(value);
    }
  }
  
  const handleSubmit=(event)=> {
  const database=JSON.parse(localStorage.getItem('accountList'));
  event.preventDefault();
  
  const userlogin=database.find(id =>
    id.email===email && id.password===password
  );

  if(userlogin===undefined){
    alert("Account Does Not Exist!");
  }else {
    alert('Successfully Logged-In');
    const userindex=database.findIndex(event => event.email === email);
      logInUser.push(database[userindex]);
      setLogInUser(logInUser);
      localStorage.setItem('logInUser',JSON.stringify(logInUser));
    if(database[userindex].usertype==='employee'){
      return navigate("/DashBoardEmployee");
    } else {
      return navigate("/DashBoardClient");
    }
  }
  }
  
  const renderForm = (
  <div className="renderForm-container">
    <div className='LogInLeft'>
    <div className='LogInLeft-container'> 
      <div><span className='logoBlackM'>SIGN </span><span className='logoGoldM'>IN</span></div>
      <div><label className='LogInLabel'>Email </label><input type="email" id="email" value={email} onChange={(event)=>handleInputChange(event)} required /></div>
      <div><label className='LogInLabel'>Password </label><input type="password" id="password" value={password} onChange={(event)=>handleInputChange(event)} required /></div>
      <div className='LogInBtn-container'><input id='LogInBtn' type="submit" disabled={!email || !password} onClick={handleSubmit} value='Log In' /></div>
    </div>
    </div>
    <div className='LogInRight'>
    
    <div className='LogInImage'><img src={logInImg} id='LIimg'/></div>
    </div>
  </div>
  );
  
  return (
  <div className="LoginForm-container">
    <NavBar />
    <div className="LoginForm">
        {renderForm}
    </div>
  </div>
  );
  }

export default LoginForm;
  
