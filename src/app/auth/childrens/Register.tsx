import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';
import Select from '@app/shared/components/partials/Select';
import ButtonGoogleLogin from '../partials/ButtonGoogleLogin';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const [errMessage, setErrMessage] = useState('');
  const onSubmit = (data: any) => {
    const register = {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      dob: data.dob,
      phone: data.phone,
      displayName: data.displayName
    }
    console.log(register);
    axios.post('https://vast-lowlands-08945.herokuapp.com/api/v1/users/register', register)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        setErrMessage(error.response.data.errors);
      })
  };
  const genderOptions = [
    { value: 'female', name: 'Female' },
    { value: 'male', name: 'Male' },
    { value: 'other', name: 'Other' }
  ]
  return (
    <>
      <div className="page-heading">
        <h2 className="page-title">Sign up for your account</h2>
      </div>
      <div className="page-content">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-6 mr-1">
                <Input type="text" className="form-control" placeholder="First Name" label="First Name" validate={register("firstName",
                  {
                    required: 'This field is required',
                    maxLength: {
                      value: 20,
                      message: "First name cannot exceed 20 characters"
                    }
                  })} errors={errors.firstName} />
              </div>
              <div className="col-6">
                <Input type="text" className="form-control" placeholder="Last Name" label="Last Name" validate={register("lastName",
                  {
                    required: 'This field is required',
                    maxLength: {
                      value: 20,
                      message: "Last name cannot exceed 20 characters"
                    }
                  })} errors={errors.lastName} />
              </div>
            </div>
            <div className="row">
              <div className="col-6 mr-1">
                <Select className="form-control" label="Gender" listOptions={genderOptions} {...register("gender")} />
              </div>
              <div className="col-6">
                <Input type="date" className="form-control" placeholder="Birthday" label="Birthday" validate={register("dob",
                  {
                    required: 'This field is required',
                    pattern: {
                      value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
                      message: 'Date of Birth must be a valid date in the format DD-MM-YYYY',
                    }
                  })} errors={errors.dob} />
              </div>
            </div>
            <Input type="text" className="form-control" placeholder="Phone" label="Phone" validate={register("phone", {
              required: 'This field is required',
              pattern: {
                value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
                message: 'Phone number is 10 digit with format xxx-xxx-xxxx',
              }
            })} errors={errors.phone} />
            <Input type="text" className="form-control" placeholder="User name" label="User name" validate={register("userName",
              {
                required: 'This field is required'
              })} errors={errors.userName} />
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
            <Input type="password" className="form-control" placeholder="Retype Password" label="Retype Password"
              validate={register("password_repeat", {
                required: 'This field is required',
                validate: (value) =>
                  value === password.current || "The passwords do not match"
              })} errors={errors.password_repeat} />
            <div className="btn-group">
              <Button className="btn btn-primary btn-block" type='submit'>Sign up</Button>
              {errMessage && <span className="btn-block error-box mt-4">{errMessage}</span>}
              <p className="my-2">or</p>
              <ButtonGoogleLogin />
            </div>
          </form>
        </div>
        <div className="tips">
          <p>
            Already have an account?
            <Link to="/auth/login"> Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;
