import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () =>{
  return (
    <div className='container'>
  <div className='navBar'>
      <li className='navComp'><Link to="/" className= 'navComp'><span className='logoBlackM'>BANK<span className='logoGoldM'>OK</span></span></Link></li>
      <li className='navComp'><Link to="/NewAcct" className='navCompLink'>SIGN UP</Link></li>
      <li className='navComp'><Link to="/LoginForm" className='navCompLink'>SIGN IN</Link></li>
      <li className='navComp'><Link to="/ContactUs" className='navCompLink'>CONTACT US</Link></li>
  </div>
  </div>
  );
}
export default NavBar;