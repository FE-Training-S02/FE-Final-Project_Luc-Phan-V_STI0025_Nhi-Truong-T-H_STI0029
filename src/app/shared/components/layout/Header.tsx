import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="articles">Articles</Link>
        </li>
        <li>
          <Link to="auth/login">Login</Link>
        </li>
        <li>
          <Link to="auth/register">Register</Link>
        </li>
      </ul>
    </header>
  );
}
