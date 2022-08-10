import React, { useEffect, useState, useRef } from "react";
import Tracker from "./Tracker";

function IncomeForm ()  {

    const currentUser=JSON.parse(localStorage.getItem('logInUser'));
    const clientList=JSON.parse(localStorage.getItem('clientList'));

    const [incomeName,setIncomeName]=useState('');
    const [incomeCost,setIncomeCost]=useState('');


    const handleInputChange=(event)=> {
        const {id,value} = event.target;
        if(id==='incomeName'){
        setIncomeName(value);
        }
        if(id==='incomeCost'){
        setIncomeCost(value);
        }
    }

    const [successAddIncome,setSuccessAddIncome]=useState(false);
    const [userBalance,setUserBalance]=useState(currentUser[0].balance);
    const prevIncome=JSON.parse(localStorage.getItem('income')) || [];
    const [income,setIncome]=useState(prevIncome);
    const prevTotalIncome=JSON.parse(localStorage.getItem('totalIncome')) || 0;
    const [totalIncome,setTotalIncome]=useState(prevTotalIncome);


    const handleSubmitEvent=(event)=> {

        event.preventDefault();
        const incomeData = {
            name: incomeName,
            cost: incomeCost
        }

    if(incomeCost>=0) {
        alert('Added Income Item');
        income.push(incomeData);
        localStorage.setItem('income',JSON.stringify(income));
        setIncome(income);
        setSuccessAddIncome(true);

        const newtotalInc = totalIncome + +incomeCost;
        const newBalance = +userBalance + +incomeCost;
        setUserBalance(newBalance);
        setTotalIncome(newtotalInc);
        localStorage.setItem('totalIncome',JSON.stringify(newtotalInc));

        const updatedUserBalance = {...currentUser[0],balance: newBalance}
        currentUser.pop();
        currentUser.push(updatedUserBalance);
        localStorage.setItem('logInUser',JSON.stringify(currentUser));
        
        const email = currentUser[0].email;
        const userindex=clientList.findIndex(event => event.email === email);
        clientList.splice(userindex,1);
        clientList.push(updatedUserBalance);
        localStorage.setItem('clientList',JSON.stringify(clientList));
        
    } else {
        alert('Invalid Income Cost');
    }
    }

const ref = useRef(null);

const handleDeleteEvent =(event)=> {
  const className=event.currentTarget.className
  const userindex=income.findIndex(e => e.name === className);
  const incomeCost=income[userindex].cost;

  const newtotalInc = totalIncome - +incomeCost;
  const newBalance = +userBalance - +incomeCost;
  setUserBalance(newBalance);
  setTotalIncome(newtotalInc);
  localStorage.setItem('totalIncome',JSON.stringify(newtotalInc));

  const updatedUserBalance = {...currentUser[0],balance: newBalance};
  currentUser.pop();
  currentUser.push(updatedUserBalance);
  localStorage.setItem('logInUser',JSON.stringify(currentUser));

  const email = currentUser[0].email;
  const clientindex=clientList.findIndex(event => event.email === email);
  clientList.splice(clientindex,1);
  clientList.push(updatedUserBalance);
  localStorage.setItem('clientList',JSON.stringify(clientList));

  income.splice(userindex,1);
  localStorage.setItem('income', JSON.stringify(income));
}

    useEffect(()=> {
        if(successAddIncome){
            setIncomeName('');
            setIncomeCost('');
    }
    setSuccessAddIncome(false)
}, [successAddIncome])


    return (
    <div>
        <div><Tracker/></div>
        <div>Current Balance : {userBalance}</div>
        <div>Total Income: {totalIncome}</div>
        <div><label>Income Name: </label><input id='incomeName' value={incomeName} onChange={(event)=>handleInputChange(event)}  type='text' placeholder='Enter income name' /></div>
        <div><label>Cost: </label><input id='incomeCost' value={incomeCost} onChange={(event)=>handleInputChange(event)}  type='number' placeholder='Enter cost'/></div>
        <div><input disabled={!incomeName || !incomeCost}  type="submit" value='Add Item' onClick={(event)=>handleSubmitEvent(event)} /></div>
        <p>Income List</p>
    <ul>
        {income.map((incomes) => {
    const { name,cost } = incomes;
    return (
        <li>
        <span>{name}</span><span> + PHP {cost}</span>
        <a ref={ref} className={name} onClick={(event)=>handleDeleteEvent(event)}> X </a>
        </li>
    );
  })}
    </ul>
    <div></div>
    </div>
);
}

export default IncomeForm;