import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './partials/Header';


const Auth = () => {
  return (
    <div className="auth-page">
      <div className="basic-container">
        <Header />
        <main className="basic-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Auth;
