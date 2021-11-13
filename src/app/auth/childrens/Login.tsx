import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../auth.actions';
import Input from '@app/shared/components/partials/Input';
import { Button } from '@app/shared/components/partials/Button';

const Login = () => {

  const dispatch = useDispatch();
  const onLogin = () => {
    const account = { username: 'admin', password: 'admin' };
    dispatch(
      signIn(account)
    );
  };

  return (
    <section className="section-login">
      <div className="page-heading">
        <h1 className="page-title">Sign in to</h1>
      </div>
      <div className="page-content">
        <div className="form-wrapper">
          <form>
            <div className="form-group">
              <div className="input-group">
                <Input type="email" className="form-control" placeholder="Email address" />
                <label className="form-label">Email address</label>
                <span className="msg-error">
                </span>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input type="password" className="form-control" placeholder="Password" />
                <label className="form-label">Password</label>
                <span className="msg-error">
                </span>
              </div>
            </div>
            <div className="btn-group">
              <Button className="btn-block" type='submit' onClick={onLogin}>Login</Button>
              <p className="my-2">or</p>
            </div>
          </form>
        </div>
        <div className="tips">
          <Link to="/" className="text-link">Forgot Password?</Link>
          <p>
            Don't have an account?
            <Link to="/auth/register" className="text-link"> Sign up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Login;
