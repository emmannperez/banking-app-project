import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Transaction from './Transactions';
import WithdrawImg from "./Withdraw.jpg";

function Withdraw (){
    const navigate=useNavigate();
    const clientList = JSON.parse(localStorage.getItem('clientList'));
    const [firstName, setfirstName]=useState('');
    const [lastName, setlastName]=useState('');
    const [withdrawalAmount, setWithdrawalAmount]=useState('');

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
            alert('Invalid Amount');
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
                alert("This account does not exist. Please Make sure the details are correct.");
                return navigate("/Withdraw");
            } else{
                localStorage.setItem('clientList',JSON.stringify(newClientList));
                alert("Withdraw Successful!")
                return navigate("/ManageAcct");
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
            <div className='NewAcctBtn-container'><input id='NewAcctBtn' disabled={!firstName || !lastName || !withdrawalAmount} type="submit" value='Withdraw' onClick={()=>handleSubmitEvent()}/></div>
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
        </div>
    );
}
export default Withdraw;