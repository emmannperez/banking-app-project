import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import HomeIcon from "./Home-Icon.png";
import WalletIcon from "./Wallet-Icon.png";
import MoneyStashIcon from "./Money-Stash-Icon.png";
import DocumentsIcon from "./Documents-Icon.png";
import LogOutIcon from "./LogOut-Icon.png";
import './NavBarEmployee.css';

function NavBarClient () {
    const navigate=useNavigate();
    const currentUser = JSON.parse(localStorage.getItem('logInUser'));
    const handleSubmit=(event)=> {
        event.preventDefault();
        alert('Successfully Logged Out!');
        currentUser.pop();
        localStorage.removeItem("logInUser");
        navigate("/");
    }

    return (
        <div className='NavBarEmployee-container'>
        <div className='NavBarEmployee'>
            <div></div>
            <li><Link to="/DashBoardClient"><img className="NBEicon" src={HomeIcon} id='HIimg' alt='Menu Icon'/></Link></li>
            <li><Link to="/ExpenseForm"><img className="NBEicon" src={WalletIcon} id='MAIimg' alt='Menu Icon'/></Link></li>
            <li><Link to="/TransactHistory"><img className="NBEicon" src={MoneyStashIcon} id='TIimg' alt='Menu Icon'/></Link></li>
            <li><Link to="/Documents"><img className="NBEicon" src={DocumentsIcon} id='DIimg' alt='Menu Icon'/></Link></li>
            <li><a type="submit" onClick={handleSubmit}><img className="NBEicon" src={LogOutIcon} id='LOIImg' alt='Menu Icon'/></a></li>
            <div></div>
        </div>
        </div>
    );
}

export default NavBarClient;