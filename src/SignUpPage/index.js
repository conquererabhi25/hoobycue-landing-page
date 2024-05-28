import React from 'react';
import { useState } from 'react';
import GoogleImage from "../Images/google.png"
import FacebookLogo from "../Images/facebook.png"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const SignInForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignIn = () => {
        setIsSignIn(true);
    };

    const toggleLogIn = () => {
        setIsSignIn(false);
    };

  return (
    <div className="sign-in-container">
      <div className="sign-in-header">
      <button
                    type='button'
                    className={`signinbutton ${isSignIn ? 'active' : ''}`}
                    onClick={toggleSignIn}
                >
                    Sign In
                </button>
                <button
                    type='button'
                    className={`signinbutton ${!isSignIn ? 'active' : ''}`}
                    onClick={toggleLogIn}
                >
                    Log In
                </button>
      </div>
      <div className="sign-in-body">
        <Button className="btn btn-light btn-block buttonsignin" variant='outline-secondary'>
          <img
            src={GoogleImage}
            alt="Google"
            className="signIcons"
          />
          Continue with Google
        </Button>
        <Button className="btn  btn-block buttonsignin" variant="outline-primary">
          <img
            src={FacebookLogo}
            alt="Google"
            className="signfacebookIcons"
          />
          Continue with Facebook
        </Button>
       
          <span className='connect-text'>Or connect with</span>
     
        <div className="form-group">
          <input
            type="email"
            className="form-control inputElement"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control inputElement"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          
        <div className={isSignIn? "" :"blockdiv"}>
        <input
            type="checkbox"
            className="form-check-input"
            id="rememberMe"
          />
        <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
          <a href="#" className="forgot-password">
            <FontAwesomeIcon icon={faLock} className='forgot-password-icon'/>
             Forgot password?
          </a>
        </div>
          <div className={isSignIn? "blockdiv" :"displaydiv"}>
            <div className='password-str-div'>
                <div className='passwordDiv'></div>
                <div className='passwordDiv'></div>
                <div className='passwordDiv'></div>
            </div>
            <p className='passwordname'>Password Strength</p>
          </div>
        </div>
        <>
        {isSignIn? (<Button className="btn btn-light btn-block buttonsignin" variant='outline-primary'>
          Continue 
        </Button>):(
            <div>
                <button className="buttonAgree" >
         Agree and Continue 
        </button>
            </div>
        )}
        </>
      </div>
    </div>
  );
};

export default SignInForm;