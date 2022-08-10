import React from "react";
import NavBarEmployee from "./NavBarEmployee";
import { useNavigate } from "react-router-dom";
import './ManageAcct.css';
import MyProfile from "./MyProfile";


const ManageAcct = () =>{
const clientList = JSON.parse(localStorage.getItem('clientList'));
const navigate = useNavigate();

const handleNewAcct = (event) => {
    event.preventDefault();
    return navigate ('/AddClient');
}

  return (
    <div className="DBE-container">
    <div className="leftDBE-container"><NavBarEmployee/></div>
    <div className="midDBE-container">
      <div className="MA-body-container">
        <h3>Manage Accounts</h3>
        <table className="MA-table-container">
        <tr className="MA-table-headers">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Balance</th>
        </tr>
        {clientList.map((client) => {
          const { firstname, lastname, email, balance } = client;
          return (
            <tr className="MA-table-data">
              <td>{firstname}</td>
              <td>{lastname}</td>
              <td>{email}</td>
              <td>PHP {balance}</td>
            </tr>
          );
        })}
        </table>
        <button className="AddClientBtn" onClick={handleNewAcct}>Add New Acct</button>
      </div>
    </div>
    <div className="rightDBE-container"><div><MyProfile/></div></div>
    </div>
  );
};

export default ManageAcct;