import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signIn } from '../auth.actions';
import { environment } from '@config/environment';
import Input from '@app/shared/components/partials/Input';
import Button from '@app/shared/components/partials/Button';
import { emailValidator, passwordValidator } from '@app/shared/validators/form.validator';
import ButtonGoogleLogin from '../partials/ButtonGoogleLogin';
import axios from 'axios';

const apiBaseUrl = environment.apiBaseUrl;
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
    formState: { errors }
  } = useForm();
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate()
  const onSubmit = (data: any) => {
    console.log(data);
    axios.post(`${apiBaseUrl}/users/login`, data).then(function (response) {
      navigate('/home');
    })
      .catch(function (error) {
        setErrMessage(error.response.data.errors);
      })
  };
  return (
    <>
      <div className="page-heading">
        <h2 className="page-title">Sign in to ST Blog</h2>
      </div>
      <div className="page-content">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="email" placeholder="Email address" name="email" label="Email address"
              register={register("email", emailValidator())} errors={errors.email} />
            <Input type="password" placeholder="Password" label="Password" name="password"
              register={register("password", passwordValidator())} errors={errors.password} />
            <div className="btn-group">
              <Button className="btn btn-primary btn-block" type='submit' onClick={onLogin}>Sign in</Button>
              {errMessage && <span className="btn-block error-box mt-4">{errMessage}</span>}
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
