import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';

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
  return (
    <section className="section-register">
      <div className="section-image">
        <div className="container-form">
          <h3 className="form-title txt-capitalize">proceed with your registeration</h3>
          <div className="form-title-sign-up">
            <i className="fas fa-lock"></i>
            <h2>Sign up</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-content">
              <div className="col-5 group-content">
                <Input type='text' placeholder='First Name' validate={register("firstName",
                  {
                    maxLength: {
                      value: 20,
                      message: "First name cannot exceed 20 characters"
                    }
                  })} />
              </div>
              <div className="col-5 group-content">
                <Input type='text' placeholder='Last Name' validate={register("lastName",
                  {
                    maxLength: {
                      value: 20,
                      message: "Last name cannot exceed 20 characters"
                    }
                  })} />
              </div>
            </div>
            <div className="input-content">
              <div className="col-5 group-content">
                {errors.firstName && <p className="text-error">{errors.firstName.message}</p>}
              </div>
              <div className="col-5 group-content">
                {errors.lastName && <p className="text-error">{errors.lastName.message}</p>}
              </div>
            </div>
            <div className="input-content">
              <div className="col-5 group-content">
                <select className="txt-capitalize" {...register("gender")} >
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="col-5 group-content">
                <Input type='date' placeholder='Birthday' validate={register("dob",
                  {
                    pattern: {
                      value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
                      message: 'Date of Birth must be a valid date in the format DD-MM-YYYY',
                    }
                  })} />
                {errors.dob && <p className="text-error">{errors.dob.message}</p>}
              </div>
            </div>
            <div className="input-content">
              <Input type='text' placeholder='Phone' validate={register("phone", {
                pattern: {
                  value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
                  message: 'Phone number is 10 digit with format xxx-xxx-xxxx',
                }
              })} />
              <i className="fas fa-phone-square"></i>
            </div>
            {errors.phone && <p className="text-error">{errors.phone.message}</p>}
            <div className="input-content">
              <Input type='text' placeholder='User name' validate={register("userName",
                {
                  required: 'This field is required'
                })} />
              <i className="far fa-user"></i>
            </div>
            {errors.userName && <p className="text-error">{errors.userName.message}</p>}
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
                    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                    message: 'Password must contain at least one number and one uppercase and lowercase letter',
                  }
                })} />
              <i className="fas fa-lock"></i>
            </div>
            {errors.password && <p className="text-error">{errors.password.message}</p>}
            <div className="input-content">
              <Input type='password' placeholder='Retype Password'
                validate={register("password_repeat", {
                  validate: (value) =>
                    value === password.current || "The passwords do not match"
                })} />
              <i className="fas fa-lock"></i>
            </div>
            {errors.password_repeat && <p className="text-error">{errors.password_repeat.message}</p>}
            <Button type='submit'>Signup</Button>
          </form>
          <Link to="/" className="title-link txt-center" >Already have an account?</Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
