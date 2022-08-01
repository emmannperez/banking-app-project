import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import NavBar from "./NavBar";



function NewAcct (){
const regForm = (
<div>
    <form>
    <div><label>First Name: </label><input name='firstName' type='text' placeholder='Enter your first name' required/></div>
    <div><label>Last Name: </label><input name='lastName' type='text' placeholder='Enter your last name' required /></div>
    <div><label>E-mail: </label><input name='email' type='email' placeholder='Enter your email' required /></div>
    <div><label>Password: </label><input name='password' type='password' placeholder='Enter your password' required /></div>
    <div><label>Confirm Password: </label><input name='cpassword' type='password' placeholder='Enter your password' required /></div>
    <div><input type="submit" value='Create New Account' /></div>
    </form>
</div>
)

return (
    <div className="NewAcctForm-container">
        <NavBar />
      <div className="NewAcctForm">
        <div className="NewAcct-title">New Account Page</div>
        {regForm}
      </div>
    </div>
);
}

export default NewAcct