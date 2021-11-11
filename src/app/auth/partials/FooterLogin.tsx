import React from 'react';
import { Link } from 'react-router-dom';

const FooterLogin = () => {
  return (
    <div className="footer-login">
      <ul className="list-tab">
        <li className="item-tab">
          <i className="fas fa-key"></i>
          <Link to="/auth/register">Sign in</Link>
        </li>
        <li className="item-tab">
          <i className="fas fa-pen"></i>
          <Link to="/auth/login">Signup</Link>
        </li>
      </ul>
      <div className="option-login">
        <p className="option-login-text txt-capitalize">or</p>
        <p>Login with</p>

      </div>
    </div>
  );
}

export default FooterLogin;
