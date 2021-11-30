import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="basic-header">
      <h1>
        <Link to="/">
          <img src="./assets/images/logo.png" alt="st-blog" className="header-logo" />
        </Link>
      </h1>
    </header>
  );
};
export default Header;
