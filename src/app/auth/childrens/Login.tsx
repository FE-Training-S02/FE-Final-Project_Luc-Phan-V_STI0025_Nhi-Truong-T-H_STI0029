import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '@app/shared/components/partials/Input';
import Button from '@app/shared/components/partials/Button';
import ButtonGoogleLogin from '../partials/ButtonGoogleLogin';
import { AuthService } from '@app/core/services/auth.service';
import { environment } from '@config/environment';
import axios from 'axios';
import { emailValidator } from '@app/shared/validators/form.validator';
const apiBaseUrl = environment.apiBaseUrl;
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState('');
  const onSubmit = (data: any) => {
    // const authService = new AuthService();
    // authService.handleLogin(data).then(function (response) {
    //   console.log(response);
    //   navigate('/home');
    // })
    //   .catch(function (error) {
    //     setErrMessage(error.response.data.errors);
    //   });
    axios.post(`${apiBaseUrl}/users/register`, register)
      .then(function (response) {
        setErrMessage(response.data);
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
            <Input type="email" placeholder="Email address" label="Email address" register={emailValidator()} errors={errors.email} />
            <Input type="password" placeholder="Password" label="Password" register={register("password",
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
              <Button className="btn btn-primary btn-block" type='submit' >Sign in</Button>
              {/* {errMessage && <span className="btn-block error-box mt-4">{errMessage}</span>} */}
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

