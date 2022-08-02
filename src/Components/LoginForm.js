import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import NavBar from "./NavBar";
  
function LoginForm() {
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
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
    return navigate("/DashBoardEmployee");
  }
  }
  
  const renderForm = (
    <div>
    <div></div>
    <form> 
      <div><label>Email </label><input type="email" id="email" value={email} onChange={(event)=>handleInputChange(event)} required /></div>
      <div><label>Password </label><input type="password" id="password" value={password} onChange={(event)=>handleInputChange(event)} required /></div>
      <div>
        <div>User Type:</div>
        <label><input type="radio" id="employee" /*onClick={handleUserType}*/ value='employee' required/>I'm an Employee</label>
        <label><input type="radio" id="client" /*onClick={handleUserType}*/ value='client' required/>I'm a Client</label>
      </div>
      <div><input type="submit" disabled={!email || !password} onClick={handleSubmit} value='Log In' /></div>
    </form>
    </div>
  );
  
  return (
  <div className="LoginForm-container">
    <NavBar />
    <div className="LoginForm">
        <div className="LoginForm-title">Sign In</div>
        {renderForm}
    </div>
  </div>
  );
  
  }

export default LoginForm;
  
