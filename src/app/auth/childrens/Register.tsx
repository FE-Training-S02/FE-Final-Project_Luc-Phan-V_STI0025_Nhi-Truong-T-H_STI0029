import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';

const Register = () => {
  return (
    <div className="container-form">
      <h3 className="form-title">Proceed With Your Registeration</h3>
      <h2 className="form-title-sign-up">Sign up</h2>
      <form>
        <div className="input-content">
          <Input type='text' placeholder='First Name' />
          <i className="far fa-user"></i>
        </div>
        <div className="input-content">
          <Input type='text' placeholder='Last Name' />
        </div>
        <select>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <div className="input-content">
          <Input type='text' placeholder='Birthday' />
          <i className="far fa-calendar-alt"></i>
        </div>
        <div className="input-content">
          <Input type='text' placeholder='Phone' />
          <i className="fas fa-phone-square"></i>
        </div>
        <div className="input-content">
          <Input type='text' placeholder='User name' />
          <i className="far fa-user"></i>
        </div>
        <div className="input-content">
          <Input type='email' placeholder='Email' />
          <i className="fas fa-envelope"></i>
        </div>
        <div className="input-content">
          <Input type='password' placeholder='Password' />
          <i className="fas fa-lock"></i>
        </div>
        <div className="input-content">
          <Input type='password' placeholder='Retype Password' />
          <i className="fas fa-lock"></i>
        </div>
        <Button type='submit'>Singup</Button>
      </form>
      <Link to="/" >Already have an account?</Link>
    </div>
  );
};

export default Register;
