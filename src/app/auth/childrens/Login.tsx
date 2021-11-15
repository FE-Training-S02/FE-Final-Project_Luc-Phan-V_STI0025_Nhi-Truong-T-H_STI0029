import React from 'react';
import { useDispatch } from 'react-redux';
import ButtonGoogleLogin from '../partials/ButtonGoogleLogin'
import { signIn } from '../auth.actions';

const Login = () => {
  
  return (
    <>
      <ButtonGoogleLogin/>
    </>
  );
};

export default Login;
