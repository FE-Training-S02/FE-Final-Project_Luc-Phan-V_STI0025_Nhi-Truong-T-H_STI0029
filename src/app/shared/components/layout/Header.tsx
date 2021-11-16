import React from 'react';
import { Link } from 'react-router-dom';
import JwtHelper from '@app/core/helpers/jwtHelper';

export function Header() {
  
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content header-desktop">
            <h1 className="logo">
              <Link to="/" className="logo-link"><img src="./assets/images/logo.png" alt="ST BLOG"/></Link>
            </h1>
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/articles" className="nav-link">Articles</Link>
                </li>
                <li className="nav-item">
                  <Link to="/auth//login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/auth/register" className="nav-link">Sign up</Link>
                </li>
                <li className="nav-item nav-dropdown">
                    <Link to="" className="nav-link dropbtn">
                      <i className="fa fa-user icon"></i>
                      Username 
                      <i className="fa fa-caret-down icon"></i>
                    </Link>
                    <div className="dropdown-content">
                      <a href="#">Profile</a>
                      <a href="#">Change Password</a>
                      <a href="#">Logout</a>
                    </div>
                </li>
              </ul>
            </nav>          
          </div>
        </div>
      </header>
    </>
  );
}
