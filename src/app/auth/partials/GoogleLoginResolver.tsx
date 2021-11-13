import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthStorageService } from '@app/core/services/authStorage.service';

const GoogleLoginResolver = () => {
  const authStorage = new AuthStorageService();  
  const urlSearchParams = new URLSearchParams(window.location.search);
  const token = urlSearchParams.get('accessToken');
  authStorage.setToken(token);
  
  return(
    <Navigate to={token ? '/home' : '/auth/login'}/>
  )
}

export default GoogleLoginResolver;
