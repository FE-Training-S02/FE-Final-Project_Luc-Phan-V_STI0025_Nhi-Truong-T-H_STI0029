import React from 'react';
import { useDispatch } from 'react-redux';
import ButtonGoogleLogin from '../partials/ButtonGoogleLogin'
import { Button } from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';
import { signIn } from '../auth.actions';
import { Link } from 'react-router-dom';

const Login = () => {

  const dispatch = useDispatch();
  const onLogin = () => {
    const account = { username: 'admin', password: 'admin' };
    dispatch(
      signIn(account)
    );
  };

  return (
    <section className="section-register">
      <div className="section-image">
        <div className="container-form">
          <h3 className="form-title txt-capitalize">proceed with your login</h3>
          <div className="form-title-sign-in">
            <i className="fas fa-key"></i>
            <h2>Login</h2>
          </div>
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
          <Link to="/" className="title-link txt-capitalize txt-center" >forgot password?</Link>
        </div>
      </div>
      <ButtonGoogleLogin />
    </section>
  );
};

export default Login;
