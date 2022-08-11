import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Transaction from './Transactions';
import WithdrawImg from "./Withdraw.jpg";

function Withdraw (){
    const navigate=useNavigate();
    const clientList = JSON.parse(localStorage.getItem('clientList'));
    const [firstName, setfirstName]=useState('');
    const [lastName, setlastName]=useState('');
    const [withdrawalAmount, setWithdrawalAmount]=useState('');
    const withdrawBalance = 0;

    useEffect(() => {
        if(withdrawalAmount < 0 || isNaN(withdrawalAmount)){
        console.log('call useEffect');
        document.getElementById("invalidAmount").classList.remove('hidden');
        }else{
            document.getElementById("invalidAmount").classList.add('hidden');
        }

    });

    const closeModal = () => {
        document.getElementById("existErrorModal").classList.add('hidden');
        document.getElementById("invalidAmountModal").classList.add('hidden');
    }

    const closeModalS = () => {
        document.getElementById("withdrawSuccessModal").classList.add('hidden');
        return navigate("/ManageAcct");
    }

    const handleInputChange=(event)=> {
        const {id, value} = event.target;
        if(id==="firstName"){
            setfirstName(value);
        }
        if(id==="lastName"){
            setlastName(value);
        }
        if(id==='withdrawalAmount'){
            setWithdrawalAmount(value);
        }
    }

    const handleSubmitEvent=()=> {
        const clientData = {
            firstname: firstName,
            lastname: lastName,
            withdrawalAmount: withdrawalAmount,
        };
        console.log(clientData);
        const userindexFW=clientList.findIndex(event => event.firstname === firstName);
        const currentbalance= parseInt(clientList[userindexFW].balance)
        if(withdrawalAmount<0 || currentbalance<=withdrawalAmount){
            // alert('Invalid Amount');
            document.getElementById("invalidAmountModal").classList.remove('hidden');
        } else {
            const newClientList = clientList.map(object => {
                if (object.firstname.toLowerCase() === firstName.toLowerCase() && object.lastname.toLowerCase() === lastName.toLowerCase()) {
                    const initialBalance = object.balance;
                    const newBalance = +initialBalance - +withdrawalAmount;
                    return {...object, balance: newBalance};
               } 
                return object;
            });

            if(JSON.stringify(newClientList) === JSON.stringify(clientList)){
                // alert("This account does not exist. Please Make sure the details are correct.");
                document.getElementById("existErrorModal").classList.remove('hidden');
                return navigate("/Withdraw");
            } else{
                localStorage.setItem('clientList',JSON.stringify(newClientList));
                // alert("Withdraw Successful!")
                document.getElementById("withdrawSuccessModal").classList.remove('hidden');
                // return navigate("/ManageAcct");
            }

            
        }
    }

    const withdrawRegForm = (
        <div className="renderForm-container">
        <div className='WithdrawLeft'>
            <div className='LogInLeft-container'>
            <div><span className='logoBlackM'>WITHDRAW</span></div>
            <div><label className='NewAcctLabel'>First Name: </label><input id='firstName' value={firstName} onChange={(event)=>handleInputChange(event)} type='text' placeholder='Enter your first name' /></div>
            <div><label className='NewAcctLabel'>Last Name: </label><input id='lastName' value={lastName} onChange={(event)=>handleInputChange(event)} type='text' placeholder='Enter your last name' /></div>
            <div><label className='NewAcctLabel'>Amount: </label><input id='withdrawalAmount' value={withdrawalAmount} onChange={(event)=>handleInputChange(event)} type='number' placeholder='Enter your withdrawal amount'/></div>
            <div id="invalidAmount" class="redError hidden"><p>Invalid Amount. Value should be positive.</p></div>
            <div className='NewAcctBtn-container'><input id='NewAcctBtn' disabled={!firstName || !lastName || !withdrawalAmount || withdrawalAmount<0} type="submit" value='Withdraw' onClick={()=>handleSubmitEvent()}/></div>
            </div>
            
        </div>
            <div className='LogInRight'><div className='LogInImage'><img src={WithdrawImg} id='LIimg'/></div></div>
        </div>
    )

    return (
        <div className="AddClientForm-container">
            <Transaction/>
        <div className="AddClientForm">
            {withdrawRegForm}
            
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

        <div id="withdrawSuccessModal" class="modal hidden">
          <div class="modal-content">
          <span class="close" onClick={closeModalS}>&times;</span>
          <p>Withdraw Successful!</p>
          </div>
        </div>
        </div>
    );
}
export default Withdraw;