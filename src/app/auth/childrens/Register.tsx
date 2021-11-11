import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';

const Register = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors }
  // } = useForm();
  // const onSubmit = (data) => {
  //   alert(JSON.stringify(data));
  // };
  return (
    <section className="section-register">
      <div className="section-image">
        <div className="container-form">
          <h3 className="form-title txt-capitalize">proceed with your registeration</h3>
          <div className="form-title-sign-up">
            <i className="fas fa-lock"></i>
            <h2>Sign up</h2>
          </div>
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-content">
              <Input type='text' placeholder='First Name'
                {...register("firstName", {
                  maxLength: 20
                })} />
              {errors?.firstName?.type === "maxLength" && (
                <p>First name cannot exceed 20 characters</p>
              )}
              <Input type='text' placeholder='Last Name' />
            </div>

            <div className="input-content">
              <select>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
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
            <Button type='submit'>Signup</Button>
          </form> */}
          <Link to="/" className="title-link txt-center" >Already have an account?</Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
