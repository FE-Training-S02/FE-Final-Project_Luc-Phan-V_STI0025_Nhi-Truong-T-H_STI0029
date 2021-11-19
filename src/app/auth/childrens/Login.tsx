import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
//import { signIn } from '../auth.actions';
import Input from '@app/shared/components/partials/Input';
import Button from '@app/shared/components/partials/Button';
import ButtonGoogleLogin from '../partials/ButtonGoogleLogin';
import axios from 'axios';
import { emailValidator, passwordValidator } from '@app/shared/validators/form.validator';
import { useDispatch } from 'react-redux';
import { signIn } from '@app/pages/articles/article.middleware';

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
        console.log('hhhhh', response);
        // const urlSearchParams = new URLSearchParams(window.location.search);
        // const token = urlSearchParams.get('accessToken');
        // if (token) {
        //   navigate('/home');
        // }
      },
      (error) => {
        console.log(11111, error);
      }))
    // axios.post(`${apiBaseUrl}/users/login`, data).then(function (response) {
    //   setMessSuccess(response.data);
    //   navigate('/home');
    // })
    //   .catch(function (error) {
    //     setErrMessage(error.response.data.errors);
    //   })
  };
  return (
    <>
      <div className="page-heading">
        <h2 className="page-title">Sign in to ST Blog</h2>
      </div>
      <div className="page-content">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="email" placeholder="Email address" label="Email address" register={register("email", emailValidator())} errors={errors.email} />
            <Input type="password" placeholder="Password" label="Password" register={register('password', passwordValidator())} errors={errors.password} />
            <div className="btn-group">
              <Button className="btn btn-primary btn-block" type='submit' >Sign in</Button>
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
function handleLogin(data: any) {
  throw new Error('Function not implemented.');
}

