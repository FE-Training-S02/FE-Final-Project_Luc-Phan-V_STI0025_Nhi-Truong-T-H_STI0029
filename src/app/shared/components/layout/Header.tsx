import React from 'react';
import { Link } from 'react-router-dom';
import JwtHelper from '@app/core/helpers/jwtHelper';

export function Header() {
  
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content header-desktop">
            <div className="logo">
              <Link to="/" className="logo-link"><img src="./assets/images/logo.png" alt="ST BLOG"/></Link>
            </div>
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
                <li className="nav-item">
                  <Link to="/auth/register" className="nav-link">
                    <img src="./assets/icons/user.png" alt="avatar" className="avatar-img"/>
                    <span>Username</span>
                  </Link>
                  <i className="fas fa-chevron-down"></i>
                </li>
              </ul>
            </nav>          
          </div>
        </div>
      </header>
    </>
  );
}
