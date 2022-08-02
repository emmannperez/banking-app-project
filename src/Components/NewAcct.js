import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import NavBar from "./NavBar";

function NewAcct (){
const navigate=useNavigate()
const [userName,setUserName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const handleInputChange=(event)=> {
  const {id,value} = event.target;
  if(id==="userName"){
    setUserName(value);
  }
  if(id==='email'){
    setEmail(value);
  }
  if(id==='password'){
    setPassword(value);
  }
}

const prevAccountList = JSON.parse(localStorage.getItem('accountList')) || [];
const [accountList,setAccountList]=useState(prevAccountList);
const [successNewAcct,setSuccessNewAcct]=useState(false);
const handleSubmitEvent=()=> {
const userlogin=accountList.find(id =>
  id.email===email && id.password===password
);
  
if(userlogin===undefined){
  alert("Successfully Created an Account!");
  return navigate("/LogInForm");
}else {
  alert('Account Already Exists');
}

const acctData = {
  username: userName,
  email: email,
  password: password
};
setAccountList(accountList.push(acctData));
localStorage.setItem('accountList',JSON.stringify(accountList));
setAccountList(accountList);
setSuccessNewAcct(true);
}

useEffect(()=>{
  if(successNewAcct){
    setUserName('');
    setEmail('');
    setPassword('');
  }
  setSuccessNewAcct(false);
},[successNewAcct])

const regForm = (
<div>
    <div className='NewAcctForm-container'>
    <div><label>Username: </label><input id='userName' value={userName} onChange={(event)=>handleInputChange(event)} type='text' placeholder='Enter your username' /></div>
    <div><label>E-mail: </label><input id='email' value={email} onChange={(event)=>handleInputChange(event)} type='email' placeholder='Enter your email'/></div>
    <div><label>Password: </label><input id='password' value={password} onChange={(event)=>handleInputChange(event)} type='password' placeholder='Enter your password'/></div>
    <div>
    <div>User Type:</div>
      <label><input type="radio" id="employee" /*onClick={handleUserType}*/ value='employee' required/>I'm an Employee</label>
      <label><input type="radio" id="client" /*onClick={handleUserType}*/ value='client' required/>I'm a Client</label>
    </div>
    <div><input disabled={!userName || !email || !password} type="submit" value='Create' onClick={()=>handleSubmitEvent()}/></div>
</div>
</div>
)

return (
    <div className="NewAcctForm-container">
        <NavBar />
      <div className="NewAcctForm">
        <div className="NewAcct-title">New Account Page</div>
        {regForm}
      </div>
    </div>
);
}

export default NewAcct