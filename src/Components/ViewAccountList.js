import React from 'react';

function ViewAccountList() {

    let clientList = JSON.parse(localStorage.getItem('clientList'));
  return (
    <div className="App">
      <table>
        <p>Client List</p>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Balance</th>
        </tr>
        {clientList.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.firstname}</td>
              <td>{val.lastname}</td>
              <td>{val.email}</td>
              <td>{val.balance}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}
  
export default ViewAccountList;