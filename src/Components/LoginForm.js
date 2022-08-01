import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import NavBar from "./NavBar";

function LoginForm() {
  
// User Login info
const database = [
    {
      email: "user1@gmail.com",
      password: "pass1"
    },
    {
        email: "user2@gmail.com",
      password: "pass2"
    }
  ];

const errors = {
    email: "invalid email",
    pass: "invalid password"
  };

// React States
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
const navigate = useNavigate();


const handleSubmit = (submitevent) => {
//Prevent page reload
    submitevent.preventDefault();

var { email, pass } = document.forms[0];

// Find user login info
    const userData = database.find((user) => user.email === email.value);

// Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass }); // Invalid password
      } else {
        setIsSubmitted(true);
        navigate("/DashBoard");
      }
    } else {// Username not found
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div>
      <form onSubmit={handleSubmit}> 
        <div>
          <label>Email </label>
          <input type="email" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div>
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div>
          <input type="submit" value='Log in to your Account' />
        </div>
      </form>
    </div>
  );

  return (
    <div className="LoginForm-container">
        <NavBar />
      <div className="LoginForm">
        <div className="LoginForm-title">Sign In</div>
        {isSubmitted ? <div></div> : renderForm}
      </div>
    </div>
  );
}

export default LoginForm;