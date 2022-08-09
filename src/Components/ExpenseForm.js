import React, { useEffect, useState } from "react";
import ExpenseList from "./ExpenseList";
import NavBarClient from "./NavBarClient";

function ExpenseForm () {
    const currentUser=JSON.parse(localStorage.getItem('logInUser'));
    const clientList=JSON.parse(localStorage.getItem('clientList'));
    const [expenseName,setExpenseName]=useState('');
    const [expenseCost,setExpenseCost]=useState('');
    const [expense,setExpense]=useState([]);


    const handleInputChange=(event)=> {
        const {id,value} = event.target;
        if(id==='expenseName'){
        setExpenseName(value);
        }
        if(id==='expenseCost'){
        setExpenseCost(value);
        }
    }

    const prevExpense=JSON.parse(localStorage.getItem('expense'));
    const [successAddExpense,setSuccessAddExpense]=useState(false);
    const [userBalance,setUserBalance]=useState(currentUser[0].balance || 0);

    if(prevExpense !==null){
        setExpense(prevExpense)
    } 

    const handleSubmitEvent=(event)=> {
        event.preventDefault();
        const expenseData = {
            name: expenseName,
            cost: expenseCost
        }

    if(expenseCost>=0) {
        alert('Added Expense Item');
        expense.push(expenseData);
        localStorage.setItem('expenses',JSON.stringify(expense));
        setExpense(expense);
        setSuccessAddExpense(true);

        const newBalance = +userBalance - +expenseCost;
        setUserBalance(newBalance);

        const updatedUserBalance = {...currentUser[0],balance: newBalance}
        localStorage.setItem('logInUser',JSON.stringify(updatedUserBalance));

        const email=currentUser[0].email;
        const userindex=clientList.findIndex(event => event.email === email);
        clientList[userindex]=updatedUserBalance;
        console.log(clientList[userindex]);

    } else {
        alert('Invalid Expense Cost');
    }
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
        <div><NavBarClient/></div>
        <div>Current Balance : {userBalance}</div>
        <div><label>Expense Name: </label><input id='expenseName' value={expenseName} onChange={(event)=>handleInputChange(event)}  type='text' placeholder='Enter expense name' /></div>
        <div><label>Cost: </label><input id='expenseCost' value={expenseCost} onChange={(event)=>handleInputChange(event)}  type='number' placeholder='Enter cost'/></div>
        <div><input disabled={!expenseName || !expenseCost}  type="submit" value='Add Item' onClick={(event)=>handleSubmitEvent(event)} /></div>
        <div><ExpenseList/></div>
    
    </div>
    );
}

export default ExpenseForm;