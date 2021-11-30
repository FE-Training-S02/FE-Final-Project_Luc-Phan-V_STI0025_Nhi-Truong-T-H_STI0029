import React from 'react';
import { Link } from 'react-router-dom';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { AuthStorageService } from '@app/core/services/authStorage.service';
import { saveUserInfo } from '@app/auth/auth.actions';

export function Header() {
  const dispatch = useDispatch();
  const authStorage = new AuthStorageService();
  const user = useSelector((state: RootStateOrAny) => state.authReducer.userInfo);
  const handleLogout = () => {
    authStorage.removeToken();
    dispatch(saveUserInfo(null));
  }
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1 className="logo">
              <Link to="/" className="logo-link"><img src="./assets/images/logo.png" alt="ST BLOG" /></Link>
            </h1>
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                {user ?
                  <>
                    <li className="nav-item">
                      <Link to="/articles/new" className="nav-link">Write</Link>
                    </li>
                    <li className="nav-item nav-dropdown">
                      <Link to="/users/profile" className="nav-link dropbtn">
                        <i className="fa fa-user icon"></i>
                        <span className="display-name">{user.displayName || `${user.firstName} ${user.lastName}`}</span>
                        <i className="fa fa-caret-down icon"></i>
                      </Link>
                      <div className="dropdown-content">
                        <Link to="/users/profile">Profile</Link>
                        <Link to="/user/change-password">Change Password</Link>
                        <Link to="/auth/login" onClick={handleLogout}>Logout</Link>
                      </div>
                    </li>
                  </> :
                  <>
                    <li className="nav-item">
                      <Link to="/auth/login" className="nav-link">Sign In</Link>
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
