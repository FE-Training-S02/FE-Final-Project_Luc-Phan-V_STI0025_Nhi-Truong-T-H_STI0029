import { Button } from 'element-react/next';
import React from 'react';
import { Navigate } from 'react-router-dom';

const GoogleLoginResolver = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const token = urlSearchParams.get('accessToken');
  localStorage.setItem('token', token);
  return (
    <Navigate to="/home" />
  );
}
export default GoogleLoginResolver;
