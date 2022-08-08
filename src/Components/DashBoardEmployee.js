import React from "react";
import NavBarEmployee from "./NavBarEmployee";
import DateTime from "./DateTime";
import './DashBoardEmployee.css';
import LoanIcon from './Loan-Icon.png';
import InvestmentIcon from './Investment-Icon.png';
import InsuranceIcon from './Insurance-Icon.png';
import MyProfile from "./MyProfile";
import DocumentsIcon from "./Documents-Icon.png";
import PhoneIcon from "./Phone-Icon.jpg";

function DashBoardEmployee () {
    const currentUser = JSON.parse(localStorage.getItem('logInUser'));
    const firstName=currentUser[currentUser.length-1].firstname;
    
return (
    <div className="DBE-container">
        <div className="leftDBE-container"><NavBarEmployee/></div>
        <div className="midDBE-container">
            <div className="greeting-container">
                <div><span className="welcometo"> Welcome to</span> <span className='DBElogoBlack'>BANK<span className='DBElogoGold'>OK</span></span><span className="welcometo">, {firstName}!</span></div>
                <div className="DateTime-container"><DateTime/></div>
            </div>
            <div className="productsandservices">
            <div className="product-container">
                <div className="title">PRODUCTS</div>
                <div className="desc-container">
                <div className="ps"><img className="DBEicon" src={LoanIcon} id='LoIimg' alt='LoanIcon'/><span className="subtitle">BankOK Loan</span><br/><span className="description">Cash loan with affordable payment terms and no required collateral.</span></div>
                <div className="ps"><img className="DBEicon" src={InvestmentIcon} id='InvIimg' alt='InvestmentIcon'/><span className="subtitle">BankOK Investments</span><br/><span className="description">For aspiring investors looking for stability, minimal volatility and certainty of income</span></div>
                <div className="ps"><img className="DBEicon" src={InsuranceIcon} id='InsIimg' alt='InsuranceIcon'/><span className="subtitle">BankOK Insurance</span><br/><span className="description">Meet your family's security and financial needs at every stage in your life.</span></div>
                </div>
            </div>
            <div className="service-container">
            <div className="title">SERVICES</div>
                <div className="desc-container">
                <div className="ps"><img className="DBEicon" src={PhoneIcon} id='LoIimg' alt='LoanIcon'/><span className="subtitle">BankOK Mobile App</span><br/><span className="description">Enjoy banking convenience anytime, anywhere through our mobile app</span></div>
                <div className="ps"><img className="DBEicon" src={LoanIcon} id='InvIimg' alt='InvestmentIcon'/><span className="subtitle">BankOK Bills Payment</span><br/><span className="description">Skip the lines and pay bills easily with your smartphone via BankOK eBills!</span></div>
                <div className="ps"><img className="DBEicon" src={DocumentsIcon} id='InsIimg' alt='InsuranceIco'/><span className="subtitle">BankOK eStatement</span><br/><span className="description">Meet your family's security and financial needs at every stage in your life.</span></div>
                </div>
            </div>
            </div>
        </div>
        <div className="rightDBE-container">
            <div><MyProfile/></div>
        </div>
    </div>
    );
}

export default DashBoardEmployee;