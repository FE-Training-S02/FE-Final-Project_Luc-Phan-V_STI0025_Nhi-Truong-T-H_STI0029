import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signIn } from '../auth.actions';
import Input from '@app/shared/components/partials/Input';
import Button from '@app/shared/components/partials/Button';

const Login = () => {
  const dispatch = useDispatch();
  const onLogin = () => {
    const account = { username: 'admin', password: 'admin' };
    dispatch(
      signIn(account)
    );
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <div className="page-heading">
        <h2 className="page-title">Sign in to ST-Blog</h2>
      </div>
      <div className="page-content">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="email" className="form-control" placeholder="Email address" label="Email address" validate={register("email",
              {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email is invalid',
                }
              })} errors={errors.email} />
            <Input type="password" className="form-control" placeholder="Password" label="Password" validate={register("password",
              {
                required: 'This field is required',
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters"
                },
                pattern: {
                  value: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                  message: 'Password must contain at least one number and lowercase letter',
                }
              })} errors={errors.password} />
            <div className="btn-group">
              <Button className="btn btn-primary btn-block" type='submit' onClick={onLogin}>Sign in</Button>
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
    </>
  );
};
export default Login;
