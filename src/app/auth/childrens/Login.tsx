import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signIn } from '../auth.actions';
import Input from '@app/shared/components/partials/Input';
import { Button } from '@app/shared/components/partials/Button';
import axios from 'axios';

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
    axios.post('https://vast-lowlands-08945.herokuapp.com/api/v1/users/login', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        error = 'invalid'
        console.log(error);
      });
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-content">
              <Input type='email' placeholder='Email' validate={register("email",
                {
                  required: 'This field is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email is invalid',
                  }
                })} />
              <i className="fas fa-envelope"></i>
            </div>
            {errors.email && <p className="text-error">{errors.password.message}</p>}
            <div className="input-content">
              <Input type='password' placeholder='Password' validate={register("password",
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
                })} />
              <i className="fas fa-lock"></i>
            </div>
            {errors.password && <p className="text-error">{errors.password.message}</p>}
            <Button type='submit' onClick={onLogin}>Login</Button>
          </form>
          <Link to="/" className="title-link txt-capitalize txt-center" >forgot password?</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
