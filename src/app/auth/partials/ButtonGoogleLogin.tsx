import React from 'react';
import { environment } from '@config/environment';

const apiBaseUrl = environment.apiBaseUrl;
const clientBaseUrl = environment.clientBaseUrl;

const ButtonGoogleLogin = () => {
  return (
    <a className="button-google-login btn btn-block" href={`${apiBaseUrl}/auth/google?redirect_to=${clientBaseUrl}/auth/google-login-resolver`}>
      <img src="./assets/icons/google.svg" alt="google login" className="icon" />
      <span className="button-title">Sign in with Google</span>
    </a>
  );
};
export default ButtonGoogleLogin;
