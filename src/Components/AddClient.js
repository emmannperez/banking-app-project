import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import NavBarEmployee from './NavBarEmployee';
import MyProfile from "./MyProfile";
import DateTime from "./DateTime";

function AddClient (){
    const navigate=useNavigate();
    const [firstName,setfirstName]=useState('');
    const [lastName,setlastName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [balance, setbalance]=useState('');

    const handleInputChange=(event)=> {
        const {id, value} = event.target;
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
        if(id==='balance'){
            setbalance(value);
        }
    }
    const prevAccountList = JSON.parse(localStorage.getItem('accountList')) || [];
    const prevClientList = JSON.parse(localStorage.getItem('clientList')) || [];
    const [successNewAcct,setSuccessNewAcct]=useState(false);
    const [accountList,setAccountList]=useState(prevAccountList);
    const [clientList,setClientList]=useState(prevClientList);
    const usertype='client';

    const handleSubmitEvent=()=> {
        const acctData = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            usertype: 'client',
            balance: balance
          };
          
        const userlogin=accountList.find(id =>
          id.email===email || id.password===password
        );

        const balanceInt=parseInt(balance);

        if(userlogin===undefined && balanceInt>=0){
          alert("Successfully Created an Account!");
          acctData.balance=balance;
          clientList.push(acctData);
          localStorage.setItem('clientList',JSON.stringify(clientList));
          setClientList(clientList);
          setAccountList(accountList.push(acctData));
          localStorage.setItem('accountList',JSON.stringify(accountList));
          setAccountList(accountList);
          setSuccessNewAcct(true);
          return navigate("/ManageAcct");
        } else {
          if (balanceInt<0) {
            alert('Invalid Initial Balance');
          } else {
            alert('Account Already Exists');
          }
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
      <div className="DBE-container">
      <div className="leftDBE-container"><NavBarEmployee/></div>
        <div className="midDBE-container">
        <div className='DT-container'><div><DateTime/></div></div>
            <div className='AddClientRight-container'>
            <div className='AddClientRight'>
            <div><span className='logoBlackS'>NEW CLIENT<span className='logoGoldS'> FORM </span></span></div>
              <div><label className='NewAcctLabel'>FIRST NAME </label><br/><input id='firstName' value={firstName} onChange={(event)=>handleInputChange(event)} type='text' placeholder='Enter your first name' /></div>
              <div><label className='NewAcctLabel'>LAST NAME </label><br/><input id='lastName' value={lastName} onChange={(event)=>handleInputChange(event)} type='text' placeholder='Enter your last name' /></div>
              <div><label className='NewAcctLabel'>E-MAIL </label><br/><input id='email' value={email} onChange={(event)=>handleInputChange(event)} type='email' placeholder='Enter your email'/></div>
              <div><label className='NewAcctLabel'>PASSWORD </label><br/><input id='password' value={password} onChange={(event)=>handleInputChange(event)} type='password' placeholder='Enter your password'/></div>
              <div><label className='NewAcctLabel'>INITIAL BALANCE </label><input id='balance' value={balance} onChange={(event)=>handleInputChange(event)} type='number' placeholder='Enter your initial balance'/></div>
              <div className='NewAcctBtn-container'><input id='NewAcctBtn' disabled={!firstName || !lastName || !balance} type="submit" value='Create' onClick={()=>handleSubmitEvent()}/></div>
            </div>
            </div>       
        </div>
        <div className="rightDBE-container">
            <div><MyProfile/></div>
        </div>
      </div>
    )

    return (
        <div className="AddClientForm-container">
            {regForm}
        </div>
    );
}
export default AddClient