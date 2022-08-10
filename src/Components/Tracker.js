import React from "react";
import {Link} from "react-router-dom";

const Tracker = () =>{

  return (
    <div className='container'>
    <div className='navBar'>
        <li className='navComp'><Link to="/DashBoardClient" className= 'navComp'><span className='logoGoldM'>MAIN</span></Link></li>
        <li className='navComp'><Link to="/ExpenseForm" className='navCompLink'>Expenses</Link></li>
        <li className='navComp'><Link to="/IncomeForm" className='navCompLink'>Income</Link></li>
    </div>
    </div>
  );
};

export default Tracker;