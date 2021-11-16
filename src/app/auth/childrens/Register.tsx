import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { environment } from '@config/environment';
import Button from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';
import Select from '@app/shared/components/partials/Select';
import { birthdayValidator, displayNameValidator, emailValidator, firstNamedValidator, lastNamedValidator, passwordValidator, phoneValidator } from '@app/shared/validators/form.validator';
import ButtonGoogleLogin from '../partials/ButtonGoogleLogin';

const apiBaseUrl = environment.apiBaseUrl;

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
  const [messageSuccess, setMessageSuccess] = useState('');
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
    axios.post(`${apiBaseUrl}/users/register`, register).then(function (response) {
      console.log(response);
      setMessageSuccess(response.data)
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
                <Input type="text" placeholder="First Name" label="First Name"
                  register={register("firstName", firstNamedValidator())} errors={errors.firstName} />
              </div>
              <div className="col-6">
                <Input type="text" placeholder="Last Name" label="Last Name"
                  register={register("lastName", lastNamedValidator())} errors={errors.lastName} />
              </div>
            </div>
            <Input type="text" placeholder="User name" label="User name"
              register={register("displayName", displayNameValidator())} errors={errors.displayName} />
            <Input type="email" placeholder="Email address" label="Email address"
              register={register("email", emailValidator())} errors={errors.email} />
            <Input type="password" placeholder="Password" label="Password"
              register={register("password", passwordValidator())} errors={errors.password} />
            <Input type="password" placeholder="Confirm Password" label="Confirm Password"
              register={register("password_repeat", {
                required: 'This field is required',
                validate: (value) =>
                  value === password.current || "The passwords do not match"
              })} errors={errors.password_repeat} />
            <div className="row">
              <div className="col-6 mr-1">
                <Select label="Gender" listOptions={genderOptions} defaultValue={'female'} register={register("gender")} />
              </div>
              <div className="col-6">
                <Input type="date" placeholder="Birthday" label="Birthday"
                  register={register("dob", birthdayValidator())} errors={errors.dob} />
              </div>
            </div>
            <Input type="text" placeholder="Phone" label="Phone"
              register={register("phone", phoneValidator())} errors={errors.phone} />
            <div className="btn-group">
              <Button className="btn btn-primary btn-block" type='submit'>Sign up</Button>
              {errMessage && <span className="btn-block error-box mt-4">{errMessage}</span>}
              {messageSuccess && <span className="btn-block success-box mt-4">{messageSuccess}</span>}
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
