import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';

const Register = () => {
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
                <Input type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="col-6">
                <Input type="text" className="form-control" placeholder="Last Name" />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-6 mr-1">
                <div className="input-group">
                  <select className="form-control">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                  <label className="form-label">Gender</label>
                </div>
              </div>
              <div className="col-6">
                <Input type="date" className="form-control" placeholder="Birthday" />
              </div>
            </div>
            <Input type="text" className="form-control" placeholder="Phone" />
            <Input type="text" className="form-control" placeholder="User name" />
            <Input type="email" className="form-control" placeholder="Email address" />
            <Input type="password" className="form-control" placeholder="Password" />
            <Input type="password" className="form-control" placeholder="Retype Password" />
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
