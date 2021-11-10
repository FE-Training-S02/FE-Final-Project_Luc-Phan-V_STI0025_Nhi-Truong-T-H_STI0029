import React from 'react';
import { useDispatch } from 'react-redux';
import ButtonGoogleLogin from '../partials/ButtonGoogleLogin'
import { Button } from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';
import { signIn } from '../auth.actions';

const Login = () => {

  return (

    <div className="container-form">
      <h3 className="form-title">Proceed With Your Login</h3>
      <h2 className="form-title-sign-up">Login</h2>
      <form>
        <div className="input-content">
          <Input type='email' placeholder='Email' />
          <i className="fas fa-envelope"></i>
        </div>
        <div className="input-content">
          <Input type='password' placeholder='Password' />
          <i className="fas fa-lock"></i>
        </div>
        <Button type='submit' onClick={onLogin}>Login</Button>
      </form>
      <ButtonGoogleLogin />
    </div>
  );
};

export default Login;
