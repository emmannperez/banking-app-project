import React from "react";
import {Link} from "react-router-dom";

const Transaction = () =>{

  return (
    <div className='container'>
    <div className='navBar'>
        <li className='navComp'><Link to="/DashBoardEmployee" className= 'navComp'><span className='logoGoldM'>MAIN</span></Link></li>
        <li className='navComp'><Link to="/Deposit" className='navCompLink'>Deposit</Link></li>
        <li className='navComp'><Link to="/Withdraw" className='navCompLink'>Withdraw</Link></li>
        <li className='navComp'><Link to="/Transfer" className='navCompLink'>Transfer</Link></li>
    </div>
    </div>
  );
};

export default Transaction;