import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () =>{
  return (
  <div className='navBar'>
      <li className='navComp'><Link to="/" className= 'navCompLink'><span className='logoBlack'>BANK<span className='logoGold'>OK</span></span></Link></li>
      <li className='navComp'><Link to="/NewAcct" className='navCompLink'>SIGN UP</Link></li>
      <li className='navComp'><Link to="/LoginForm" className='navCompLink'>SIGN IN</Link></li>
      <li className='navComp'><Link to="/ContactUs" className='navCompLink'>CONTACT US</Link></li>
  </div>
  );
}
export default NavBar;