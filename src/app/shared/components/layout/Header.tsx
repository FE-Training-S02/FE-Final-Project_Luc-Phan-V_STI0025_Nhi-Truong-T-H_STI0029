import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import JwtHelper from '@app/core/helpers/jwtHelper';
import { environment } from '@config/environment';
import { AuthStorageService } from '@app/core/services/authStorage.service';
import { ApiService } from '@app/core/services/api.service';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';

export function Header() {
  const user = useSelector((state: RootStateOrAny) => state.authReducer.userInfo);
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
                {user ?
                <li className="nav-item nav-dropdown">
                  <Link to="" className="nav-link dropbtn">
                    <i className="fa fa-user icon"></i>
                    {user.lastName} 
                    <i className="fa fa-caret-down icon"></i>
                  </Link>
                  <div className="dropdown-content">
                    <Link to="/">Profile</Link>
                    <Link to="/">Change Password</Link>
                    <Link to="/articles/new">Create Article</Link>
                    <Link to="/">Logout</Link>
                  </div>
                </li> : 
                <>
                  <li className="nav-item">
                      <Link to="/auth/login" className="nav-link">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/auth/register" className="nav-link">Sign up</Link>
                  </li>
                </>
                }
              </ul>
            </nav>          
          </div>
        </div>
      </header>
    </>
  );
}
