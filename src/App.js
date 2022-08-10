import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginForm from './Components/LoginForm';
import NewAcct from './Components/NewAcct';
import DashBoardEmployee from './Components/DashBoardEmployee';
import HomePage from './Components/HomePage';
import ContactUs from './Components/ContactUs';
import ManageAcct from './Components/ManageAcct';
import Transactions from './Components/Transactions';
import DashBoardClient from './Components/DashBoardClient';
import AddClient from './Components/AddClient';
import Withdraw from './Components/Withdraw';
import Deposit from './Components/Deposit';
import Transfer from './Components/Transfer';
import ExpenseForm from './Components/ExpenseForm';
import IncomeForm from './Components/IncomeForm';
import Tracker from './Components/Tracker';
import TransactHistory from './Components/TransactHistory';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/LoginForm" element={<LoginForm/>}/>
      <Route path="/NewAcct" element={<NewAcct/>}/>
      <Route path="/DashBoardEmployee" element={<DashBoardEmployee/>}/>
      <Route path="/ManageAcct" element={<ManageAcct/>}/>
      <Route path="/Transactions" element={<Transactions/>}/>
      <Route path="/DashBoardClient" element={<DashBoardClient/>}/>
      <Route path="/AddClient" element={<AddClient/>}/>
      <Route path="/Withdraw" element={<Withdraw/>}/>
      <Route path="/Deposit" element={<Deposit/>}/>
      <Route path="/Transfer" element={<Transfer/>}/>
      <Route path="/Tracker" element={<Tracker/>}/>
      <Route path="/ExpenseForm" element={<ExpenseForm/>}/>
      <Route path="/IncomeForm" element={<IncomeForm/>}/>
      <Route path="/TransactHistory" element={<TransactHistory/>}/>
    </Routes>
    </div>
  );
}

export default App;
