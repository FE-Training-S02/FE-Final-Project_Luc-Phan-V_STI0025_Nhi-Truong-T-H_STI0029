import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';

const Register = () => {
  return (
    <section className="section-register">
      <div className="page-heading">
        <h1 className="page-title">Sign up for your account</h1>
      </div>
      <div className="page-content">
        <div className="form-wrapper">
          <form>
            <div className="form-row">
              <div className="form-group col-6 mr-1">
                <div className="input-group">
                  <Input type="text" className="form-control" placeholder="First Name" />
                  <label className="form-label">First Name</label>
                  <span className="msg-error">
                  </span>
                </div>
              </div>
              <div className="form-group col-6">
                <div className="input-group">
                  <Input type="text" className="form-control" placeholder="Last Name" />
                  <label className="form-label">Last Name</label>
                  <span className="msg-error">
                  </span>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-6 mr-1">
                <div className="input-group">
                  <select className="form-control">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                  <label className="form-label">Sex</label>
                  <span className="msg-error">
                  </span>
                </div>
              </div>
              <div className="form-group col-6">
                <div className="input-group">
                  <Input type="date" className="form-control" placeholder="Birthday" />
                  <label className="form-label">Birthday</label>
                  <span className="msg-error">
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Phone" />
                <label className="form-label">Phone</label>
                <span className="msg-error">
                </span>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <Input type="text" className="form-control" placeholder="User name" />
                <label className="form-label">User name</label>
                <span className="msg-error">
                </span>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <Input type="email" className="form-control" placeholder="Email address" />
                <label className="form-label">Email address</label>
                <span className="msg-error">
                </span>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input type="password" className="form-control" placeholder="Password" />
                <label className="form-label">Password</label>
                <span className="msg-error">
                </span>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input type="password" className="form-control" placeholder="Retype Password" />
                <label className="form-label">Retype Password</label>
                <span className="msg-error">
                </span>
              </div>
            </div>
            <div className="btn-group">
              <Button className="btn-block" type='submit'>Signup</Button>
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
    </section>
  );
};

export default Register;
