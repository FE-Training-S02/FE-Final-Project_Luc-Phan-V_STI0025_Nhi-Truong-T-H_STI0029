import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUp } from '../auth.middleware';
import Button from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';
import Select from '@app/shared/components/partials/Select';
import ButtonGoogleLogin from '../partials/ButtonGoogleLogin';
import { birthDayValidator, emailValidator, firstNameValidator, lastNameValidator, passwordValidator, phoneValidator, userNameValidator } from '@app/shared/validators/form.validator';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const dispatch = useDispatch();
  const password = useRef({});
  password.current = watch('password', '');
  const [errMessage, setErrMessage] = useState('');
  const [messSuccess, setMessSuccess] = useState('');
  const onSubmit = (data: any) => {
    delete data.password_repeat;
    dispatch(signUp(data,
      (res) => {
        setMessSuccess(res.data);
      },
      (error) => {
        setErrMessage(error.response.data.errors);
      }))
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
                <Input
                  type="text"
                  placeholder="First Name"
                  label="First Name"
                  register={register('firstName', firstNameValidator())}
                  errors={errors.firstName} />
              </div>
              <div className="col col-6">
                <Input
                  type="text"
                  placeholder="Last Name"
                  label="Last Name"
                  register={register('lastName', lastNameValidator())}
                  errors={errors.lastName} />
              </div>
            </div>
            <Input
              type="text"
              placeholder="User name"
              label="User name"
              register={register('displayName', userNameValidator())}
              errors={errors.displayName} />
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
            <Input
              type="password"
              placeholder="Confirm Password"
              label="Confirm Password"
              register={register('password_repeat', {
                required: 'This field is required',
                validate: (value) =>
                  value === password.current || "The passwords do not match"
              })} errors={errors.password_repeat} />
            <div className="row">
              <div className="col col-6">
                <Select
                  label="Gender"
                  listOptions={genderOptions}
                  defaultValue={genderOptions[0]}
                  register={register('gender')} />

              </div>
              <div className="col col-6">
                <Input
                  type="date"
                  placeholder="Birthday"
                  label="Birthday"
                  register={register('dob', birthDayValidator())}
                  errors={errors.dob} />
              </div>
            </div>
            <Input
              type="text"
              placeholder="Phone"
              label="Phone"
              register={register('phone', phoneValidator())}
              errors={errors.phone} />
            <div className="btn-group">
              <Button
                className="btn btn-primary btn-block"
                type='submit'>Sign up</Button>
              {messSuccess && <span className="btn btn-block alert alert-success mt-4">{messSuccess}</span>}
              {errMessage && <span className="btn btn-block alert alert-error mt-4">{errMessage}</span>}
              <p className="my-2">or</p>
              <ButtonGoogleLogin />
            </div>
          </form>
        </div>
        <div className="tips">
          <p>
            Already have an account?
            <Link to="/auth/login" className="text-link"> Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;
