import React from 'react';

const ButtonGoogleLogin = () => {
  return (
    <a className="button-google-login" href="https://vast-lowlands-08945.herokuapp.com/api/v1/auth/google?redirect_to=http://localhost:3000/auth/google-login-resolver">
      <img src="./assets/icons/google.svg" alt="google login" className="icon" />
      <span className="button-title">Sign in with Google</span>
    </a>
  );
};
export default ButtonGoogleLogin;
