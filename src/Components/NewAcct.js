import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import NavBar from "./NavBar";
import signUpImg from "./signUpImg.jpg";

function NewAcct (){
const navigate=useNavigate()
const [firstName,setfirstName]=useState('');
const [lastName,setlastName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [usertype,setUserType]=useState('');

const handleInputChange=(event)=> {
  const {id,name,value} = event.target;
  if(id==="firstName"){
    setfirstName(value);
  }
  if(id==="lastName"){
    setlastName(value);
  }
  if(id==='email'){
    setEmail(value);
  }
  if(id==='password'){
    setPassword(value);
  }
  if(name==='usertype'){
    setUserType(value);
  }
}

const prevAccountList = JSON.parse(localStorage.getItem('accountList')) || [];
const prevClientList = JSON.parse(localStorage.getItem('clientList')) || [];
const [successNewAcct,setSuccessNewAcct]=useState(false);
const [accountList,setAccountList]=useState(prevAccountList);
const [clientList,setClientList]=useState(prevClientList);

const handleSubmitEvent=()=> {

  const acctData = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    password: password,
    usertype: usertype,
    balance: 'N/A'
  };

  if(usertype==='client') {
  acctData.balance=0;
  clientList.push(acctData);
  localStorage.setItem('clientList',JSON.stringify(clientList));
  setClientList(clientList);
  }
    
const userlogin=accountList.find(id =>
  id.email===email || id.password===password
);

if(userlogin===undefined){
  alert("Successfully Created an Account!");
  setAccountList(accountList.push(acctData));
  localStorage.setItem('accountList',JSON.stringify(accountList));
  setAccountList(accountList);
  setSuccessNewAcct(true);

  return navigate("/LogInForm");
}else {
  alert('Account Already Exists');
}

}

useEffect(()=>{
  if(successNewAcct){
    setfirstName('');
    setlastName('');
    setEmail('');
    setPassword('');
  }
  setSuccessNewAcct(false);
},[successNewAcct])

const regForm = (
<div>
<div className='regForm-container'>
  <div className='NewAcctLeft'>
  <div className='NewAcctImage'><img src={signUpImg} id='NAimg' alt='HPIcon'/></div>
  </div>
  <div className='NewAcctRight'>
    <div className='NewAcctRight-container'>
    <div><span className='logoBlackM'>SIGN </span><span className='logoGoldM'>UP</span></div>
      <div><label className='NewAcctLabel'>FIRST NAME </label><br/><input id='firstName' value={firstName} onChange={(event)=>handleInputChange(event)} type='text' placeholder='Enter your first name' /></div>
      <div><label className='NewAcctLabel'>LAST NAME </label><br/><input id='lastName' value={lastName} onChange={(event)=>handleInputChange(event)} type='text' placeholder='Enter your last name' /></div>
      <div><label className='NewAcctLabel'>E-MAIL: </label><br/><input id='email' value={email} onChange={(event)=>handleInputChange(event)} type='email' placeholder='Enter your email'/></div>
      <div><label className='NewAcctLabel'>PASSWORD: </label><br/><input id='password' value={password} onChange={(event)=>handleInputChange(event)} type='password' placeholder='Enter your password'/></div>
    <div>
    <div className='NewAcctLabel'>User Type:</div>
      <div className='radio-container'>
      <label><input type="radio" id="employee" name='usertype'  value='employee' onChange={(event)=>handleInputChange(event)} required/>I'm an <span> Employee </span></label>
      <label><input type="radio" id="client" name='usertype'  value='client' onChange={(event)=>handleInputChange(event)} required/>I'm a <span>Client</span></label>
      </div>
    </div>
    
    <div className='NewAcctBtn-container'><input id='NewAcctBtn' disabled={!firstName || !lastName || !email || !password} type="submit" value='Create an Account' onClick={()=>handleSubmitEvent()}/></div>
  </div>
  </div>
</div>
</div>
)

return (
    <div className="NewAcctForm-container">
        <NavBar />
      <div className="NewAcctForm">
        {regForm}
      </div>
    </div>
);
}

export default NewAcct