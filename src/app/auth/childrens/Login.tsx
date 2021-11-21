import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { emailValidator, passwordValidator } from '@app/shared/validators/form.validator';
import { signIn } from '../auth.middleware';
import Input from '@app/shared/components/partials/Input';
import Button from '@app/shared/components/partials/Button';
import ButtonGoogleLogin from '../partials/ButtonGoogleLogin';

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate()
  const onSubmit = (account) => {
    dispatch(signIn(account,
      (response) => {
        navigate('/home');
      },
      (error) => {
        setErrMessage(error.response.data.errors);
      }))
  };
  return (
    <>
      <div className="page-heading">
        <h2 className="page-title">Sign in to ST Blog</h2>
      </div>
      <div className="page-content">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              placeholder="Email address"
              label="Email address"
              register={register('email', emailValidator())}
              errors={errors.email} />
            <Input
              type="password"
              placeholder="Password"
              label="Password"
              register={register('password', passwordValidator())}
              errors={errors.password} />
            <div className="btn-group">
              <Button
                className="btn btn-primary btn-block"
                type='submit' >Sign in</Button>
              {errMessage && <span className="btn btn-block alert alert-error mt-4">{errMessage}</span>}
              <p className="my-2">or</p>
              <ButtonGoogleLogin />
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
