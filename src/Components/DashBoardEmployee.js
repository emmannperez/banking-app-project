import React from "react";
import NavBarEmployee from "./NavBarEmployee";
import DateTime from "./DateTime";

function DashBoardEmployee () {
    const currentUser = JSON.parse(localStorage.getItem('logInUser'));
    const firstName=currentUser[currentUser.length-1].firstname;
    const lastName=currentUser[currentUser.length-1].lastname;
    
    return (
    <div>
        <div><NavBarEmployee/></div>
        <div>Welcome, <br/> {firstName} {lastName}!</div>
        <div><DateTime/></div>
        <div></div>
    </div>
    );
}

export default DashBoardEmployee;