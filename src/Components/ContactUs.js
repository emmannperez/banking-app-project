import React from 'react';
import NavBar from "./NavBar";
import contactUsImg from "../contactUsVector.jpg";

function ContactUs (){
    return (
        <div className='contactUsContainer'>
            <NavBar />
            <div className='contactUsBody'>
                <div className='contactUsImage'>
                    <img src={contactUsImg} id="contactUsImg"></img>
                </div>
                <div className='contactUsRight'>
                    <div className='contactUsRightCont'>
                    <span className='logoBlackM'>CONTACT<span className='logoGoldM'> US</span></span>

                    <div><label for="contactUsName">NAME </label><br></br><input id='contactUsName' type='text' placeholder='Enter your name' required /></div>

                    <div><label for="contactUsEmail">E-MAIL </label><br></br><input id='contactUsEmail' type='email' placeholder='Enter your email' required /></div>

                    <div><label for="contactUsMsg">MESSAGE </label><br></br><textarea id="contactUsMsg"></textarea></div>

                </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;