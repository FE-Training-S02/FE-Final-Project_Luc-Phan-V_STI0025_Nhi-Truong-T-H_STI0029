import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterLogin from './partials/FooterLogin';

const Auth = () => {
  return (
    <div className="auth-page">
      <Outlet />
      <FooterLogin />
    </div>
  );
};

export default Auth;
