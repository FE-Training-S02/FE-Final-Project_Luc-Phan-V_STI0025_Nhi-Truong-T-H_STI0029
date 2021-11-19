import React, { useRef } from 'react';
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
  const onSubmit = (data: any) => {
    console.log(data);
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
              <div className="col col-6">
                <Input type="text" placeholder="First Name" label="First Name" register={register("firstName",
                  {
                    required: 'This field is required',
                    maxLength: {
                      value: 20,
                      message: "First name cannot exceed 20 characters"
                    }
                  })} errors={errors.firstName} />
              </div>
              <div className="col col-6">
                <Input type="text" placeholder="Last Name" label="Last Name" register={register("lastName",
                  {
                    required: 'This field is required',
                    maxLength: {
                      value: 20,
                      message: "Last name cannot exceed 20 characters"
                    }
                  })} errors={errors.lastName} />
              </div>
            </div>
            <Input type="text" placeholder="User name" label="User name" register={register("userName",
              {
                required: 'This field is required'
              })} errors={errors.userName} />
            <Input type="email" placeholder="Email address" label="Email address" register={register("email",
              {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email is invalid',
                }
              })} errors={errors.email} />
            <Input type="password" placeholder="Password" label="Password" register={register("password",
              {
                required: 'This field is required',
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters"
                },
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                  message: 'Password must contain at least one number and one uppercase and lowercase letter',
                }
              })} errors={errors.password} />
            <Input type="password" placeholder="Confirm Password" label="Confirm Password" register={register("password_repeat", {
              required: 'This field is required',
              validate: (value) =>
                value === password.current || "The passwords do not match"
            })} errors={errors.password_repeat} />
            <div className="row">
              <div className="col col-6">
                <Select label="Gender" listOptions={genderOptions} defaultValue={genderOptions[0]} register={register("gender")} />
              </div>
              <div className="col col-6">
                <Input type="date" placeholder="Birthday" label="Birthday" register={register("dob",
                  {
                    required: 'This field is required',
                    pattern: {
                      value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
                      message: 'Date of Birth must be a valid date in the format DD-MM-YYYY',
                    }
                  })} errors={errors.dob} />
              </div>
            </div>
            <Input type="text" placeholder="Phone" label="Phone" register={register("phone", {
              required: 'This field is required',
              pattern: {
                value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
                message: 'Phone number is 10 digit with format xxx-xxx-xxxx',
              }
            })} errors={errors.phone} />
            <div className="btn-group">
              <Button className="btn btn-primary btn-block" type='submit'>Sign up</Button>
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
