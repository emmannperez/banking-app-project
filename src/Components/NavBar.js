import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () =>{
  return (
  <div>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/ContactUs">Contact Us</Link></li>
  <li><Link to="/LoginForm">Sign In</Link></li>
  <li><Link to="/NewAcct">Sign Up</Link></li>
  </div>
  );
}
export default NavBar;