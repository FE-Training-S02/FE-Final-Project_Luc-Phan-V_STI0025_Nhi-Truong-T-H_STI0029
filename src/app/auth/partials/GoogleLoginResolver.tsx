import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthStorageService } from '@app/core/services/authStorage.service';

const GoogleLoginResolver = () => {
  const authStorage = new AuthStorageService();  
  const navigate = useNavigate()
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const token = urlSearchParams.get('accessToken');
    if (token) {
      authStorage.setToken(token);
      navigate('/home');
    } else {
      alert('An error occurred during login!');
      navigate('/auth/login');
    }
  },[]);
  return(
    <></>
  )
}

export default GoogleLoginResolver;
