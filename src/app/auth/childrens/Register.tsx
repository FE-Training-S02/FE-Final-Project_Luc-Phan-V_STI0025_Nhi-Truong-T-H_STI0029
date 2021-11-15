import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';
import Select from '@app/shared/components/partials/Select';

const Register = () => {
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
          <form>
            <div className="row">
              <div className="col-6 mr-1">
                <Input type="text" placeholder="First Name" />
              </div>
              <div className="col-6">
                <Input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="row">
              <div className="col-6 mr-1">
                <Select label="Gender" listOptions={genderOptions} />
              </div>
              <div className="col-6">
                <Input type="date" placeholder="Birthday" />
              </div>
            </div>
            <Input type="text" placeholder="Phone" />
            <Input type="text" placeholder="User name" />
            <Input type="email" placeholder="Email address" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Retype Password" />
            <div className="btn-group">
              <Button className="btn btn-primary btn-block" type='submit'>Sign up</Button>
              <p className="my-2">or</p>
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
