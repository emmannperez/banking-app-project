import React from "react";
import {Link} from "react-router-dom";

function NavBarEmployee () {
    return (
        <div>
            <li><Link to="/">My Profile</Link></li>
            <li><Link to="/ManageAcct">Manage Accounts</Link></li>
            <li><Link to="/Transactions">Transaction History</Link></li>
            <li><Link to="/LogInForm">Log Out</Link></li>
        </div>
    );
}

export default NavBarEmployee;