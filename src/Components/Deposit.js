import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Transaction from './Transactions';
import DepositImg from "./Deposit.jpg";

function Deposit (){
    const navigate=useNavigate();
    const clientList = JSON.parse(localStorage.getItem('clientList'));
    const [firstName, setfirstName]=useState('');
    const [lastName, setlastName]=useState('');
    const [depositAmount, setDepositAmount]=useState('');

    const closeModal = () => {
        document.getElementById("existErrorModal").classList.add('hidden');
        document.getElementById("invalidAmountModal").classList.add('hidden');
    }

    const closeModalS = () => {
        document.getElementById("depositSuccessModal").classList.add('hidden');
        return navigate("/ManageAcct");
    }

    useEffect(() => {
        if(depositAmount < 0 || isNaN(depositAmount)){
        console.log('call useEffect');
        document.getElementById("invalidAmount").classList.remove('hidden');
        }else{
            document.getElementById("invalidAmount").classList.add('hidden');
        }

    });

    const handleInputChange=(event)=> {
        const {id, value} = event.target;
        if(id==="firstName"){
            setfirstName(value);
        }
        if(id==="lastName"){
            setlastName(value);
        }
        if(id==='depositAmount'){
            setDepositAmount(value);
        }
    }

    const handleSubmitEvent=()=> {
        const clientData = {
            firstname: firstName,
            lastname: lastName,
            depositAmount: depositAmount,
        };
        console.log(clientData);

        if(depositAmount<0){
            // alert('Invalid Amount');
            document.getElementById("invalidAmountModal").classList.remove('hidden');
        } else {
            const newClientList = clientList.map(object => {
                if (object.firstname.toLowerCase() === firstName.toLowerCase() && object.lastname.toLowerCase() === lastName.toLowerCase()) {
                    const initialBalance = object.balance;
                    const newBalance = +initialBalance + +depositAmount;
                    return {...object, balance: newBalance};
                } 
                return object;
            });
    
            if(JSON.stringify(newClientList) === JSON.stringify(clientList)){
                // alert("This account does not exist. Please Make sure the details are correct.");
                document.getElementById("existErrorModal").classList.remove('hidden');
                return navigate ("/Deposit");
            } else{
                localStorage.setItem('clientList',JSON.stringify(newClientList));
                // alert("Deposit Successful!")
                document.getElementById("depositSuccessModal").classList.remove('hidden');
                // return navigate("/ManageAcct");
            }

        }
    }

    const depositRegForm = (
        <div className="renderForm-container">
        <div className='DepositLeft'>
            <div className='LogInLeft-container'>
            <div><span className='logoBlackM'>DEPOSIT</span></div>
            <div><label className='NewAcctLabel'>First Name: </label><input id='firstName' value={firstName} onChange={(event)=>handleInputChange(event)} type='text' placeholder='Enter your first name' /></div>
            <div><label className='NewAcctLabel'>Last Name: </label><input id='lastName' value={lastName} onChange={(event)=>handleInputChange(event)} type='text' placeholder='Enter your last name' /></div>
            <div><label className='NewAcctLabel'>Amount: </label><input id='depositAmount' value={depositAmount} onChange={(event)=>handleInputChange(event)} type='number' placeholder='Enter your deposit amount'/></div>
            <div id="invalidAmount" class="redError hidden"><p>Invalid Amount. Value should be positive.</p></div>

            <div className='NewAcctBtn-container'><input id='NewAcctBtn' disabled={!firstName || !lastName || !depositAmount || depositAmount<0} type="submit" value='Deposit' onClick={()=>handleSubmitEvent()}/></div>
            </div>
        </div>
            <div className='LogInRight'>
            <div className='LogInImage'><img src={DepositImg} id='LIimg'/></div>
            </div>
        
        <div id="invalidAmountModal" class="modal hidden">
          <div class="modal-content">
          <span class="close" onClick={closeModal}>&times;</span>
          <p>Invalid Amount. This Account has insufficient balance to make this withdrawal.</p>
          </div>
        </div>
  
        <div id="existErrorModal" class="modal hidden">
          <div class="modal-content">
          <span class="close" onClick={closeModal}>&times;</span>
          <p>Account does not exist!</p>
          </div>
        </div>

        <div id="depositSuccessModal" class="modal hidden">
          <div class="modal-content">
          <span class="close" onClick={closeModalS}>&times;</span>
          <p>Deposit Successful!</p>
          </div>
        </div>
            </div>
    )

    return (
        <div className="AddClientForm-container">
            <Transaction/>
        <div className="AddClientForm">
            {depositRegForm}
        </div>
        </div>
    );
}
export default Deposit;