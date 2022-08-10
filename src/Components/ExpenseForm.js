import React, { useEffect, useState, useRef } from "react";
import Tracker from "./Tracker";

function ExpenseForm ()  {

    const currentUser=JSON.parse(localStorage.getItem('logInUser'));
    const clientList=JSON.parse(localStorage.getItem('clientList'));

    const [expenseName,setExpenseName]=useState('');
    const [expenseCost,setExpenseCost]=useState('');


    const handleInputChange=(event)=> {
        const {id,value} = event.target;
        if(id==='expenseName'){
        setExpenseName(value);
        }
        if(id==='expenseCost'){
        setExpenseCost(value);
        }
    }

    const [successAddExpense,setSuccessAddExpense]=useState(false);
    const [userBalance,setUserBalance]=useState(currentUser[0].balance);
    const prevExpense=JSON.parse(localStorage.getItem('expense')) || [];
    const [expense,setExpense]=useState(prevExpense);
    const prevTotalExpense=JSON.parse(localStorage.getItem('totalExpense')) || 0;
    const [totalExpense,setTotalExpense]=useState(prevTotalExpense);

    const handleSubmitEvent=(event)=> {

        event.preventDefault();
        const expenseData = {
            name: expenseName,
            cost: expenseCost
        }

    if(expenseCost>=0) {
        alert('Added Expense Item');
        expense.push(expenseData);
        localStorage.setItem('expense',JSON.stringify(expense));
        localStorage.setItem('totalExpense',JSON.stringify(totalExpense));
        setExpense(expense);
        setSuccessAddExpense(true);

        const newtotalExp = totalExpense + +expenseCost;
        const newBalance = +userBalance - +expenseCost;
        setUserBalance(newBalance);
        setTotalExpense(newtotalExp);
        localStorage.setItem('totalExpense',JSON.stringify(newtotalExp));

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
        alert('Invalid Expense Cost');
    }
    }

const ref = useRef(null);

const handleDeleteEvent =(event)=> {
  const className=event.currentTarget.className
  const userindex=expense.findIndex(e => e.name === className);
  const expenseCost=expense[userindex].cost;

  const newtotalExp = totalExpense - +expenseCost;
  const newBalance = +userBalance + +expenseCost;
  setUserBalance(newBalance);
  setTotalExpense(newtotalExp);
  localStorage.setItem('totalExpense',JSON.stringify(newtotalExp));

  const updatedUserBalance = {...currentUser[0],balance: newBalance};
  currentUser.pop();
  currentUser.push(updatedUserBalance);
  localStorage.setItem('logInUser',JSON.stringify(currentUser));

  const email = currentUser[0].email;
  const clientindex=clientList.findIndex(event => event.email === email);
  clientList.splice(clientindex,1);
  clientList.push(updatedUserBalance);
  localStorage.setItem('clientList',JSON.stringify(clientList));

  expense.splice(userindex,1);
  localStorage.setItem('expense', JSON.stringify(expense));
}

    useEffect(()=> {
        if(successAddExpense){
            setExpenseName('');
            setExpenseCost('');
    }
    setSuccessAddExpense(false)
}, [successAddExpense])


    return (
    <div>
        <div><Tracker/></div>
        <div>Current Balance : {userBalance}</div>
        <div>Total Expenses: {totalExpense}</div>
        <div><label>Expense Name: </label><input id='expenseName' value={expenseName} onChange={(event)=>handleInputChange(event)}  type='text' placeholder='Enter expense name' /></div>
        <div><label>Cost: </label><input id='expenseCost' value={expenseCost} onChange={(event)=>handleInputChange(event)}  type='number' placeholder='Enter cost'/></div>
        <div><input disabled={!expenseName || !expenseCost}  type="submit" value='Add Item' onClick={(event)=>handleSubmitEvent(event)} /></div>
        <p>Expense List</p>
    <ul>
        {expense.map((expenses) => {
    const { name,cost } = expenses;
    return (
        <li>
        <span>{name}</span><span> - PHP {cost}</span>
        <a ref={ref} className={name} onClick={(event)=>handleDeleteEvent(event)}> X </a>
        </li>
    );
  })}
    </ul>
    <div></div>
    </div>
);
}

export default ExpenseForm;