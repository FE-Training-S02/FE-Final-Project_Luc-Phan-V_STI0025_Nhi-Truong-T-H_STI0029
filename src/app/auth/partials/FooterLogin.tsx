import React from 'react';
import { Link } from 'react-router-dom';
import ButtonGoogleLogin from './ButtonGoogleLogin';

const FooterLogin = () => {
  return (
    <div className="footer-login">
      <ul className="list-tab">
        <li className="item-tab">
          <i className="fas fa-key"></i>
          <Link to="/auth/login">Sign in</Link>
        </li>
        <li className="item-tab">
          <i className="fas fa-pen"></i>
          <Link to="/auth/register">Signup</Link>
        </li>
      </ul>
      <div className="option-login">
        <p className="option-login-text txt-capitalize">or</p>
        <p>Login with</p>
        <ButtonGoogleLogin />
      </div>
    </div>
  );
}

export default FooterLogin;
