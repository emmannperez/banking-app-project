import React from "react";

function ExpenseList () {
const expenseList = JSON.parse(localStorage.getItem('expenses')) || [];

const handleDeleteEvent=()=>{

}
  return (
    <div>
        <p>Expense List</p>
        <table>
        <tr>
            <th>Description</th>
            <th>Expense Cost</th>
        </tr>
        {expenseList.map((expense) => {
          const { name,cost } = expense;
          return (
            <tr>
              <td>{name}</td>
              <td>- PHP {cost}</td>
              <td><a onClick={(event)=>handleDeleteEvent(event)}>X</a></td>
            </tr>
          );
        })}
        </table>
        <div></div>
      </div>
  );
};

export default ExpenseList;