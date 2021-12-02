import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { emailValidator, requireValidator } from '@app/shared/validators/form.validator';
import { signIn } from '../auth.middleware';
import Input from '@app/shared/components/partials/Input';
import Button from '@app/shared/components/partials/Button';
import ButtonGoogleLogin from '../partials/ButtonGoogleLogin';
import { AuthStorageService } from '@app/core/services/authStorage.service';
import { useAlert } from '@app/shared/contexts/alert.context';
import { useLoading } from '@app/shared/contexts/loading.context';

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm({ mode: 'onChange' });
  const authStorage = new AuthStorageService();
  const { setAlert } = useAlert();
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const onSubmit = (account) => {
    setLoading(true);
    dispatch(signIn(account,
      (response) => {
        authStorage.setToken(response.accessToken);
        navigate('/');
        setLoading(false);
      },
      (error) => {
        setAlert({
          type: 'danger',
          mess: error.response.data.errors
        });
        setLoading(false);
      }));
  };
  return (
    <>
      <div className="page-heading">
        <h2 className="page-title">Sign in to ST Blog</h2>
      </div>
      <div className="page-content">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
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
              register={register('password', requireValidator())}
              errors={errors.password} />
            <div className="btn-group">
              <Button
                className="btn btn-primary btn-block"
                disabled={!isValid}
                type="submit"
              >
                Sign in
              </Button>
              <p className="my-2">or</p>
              <ButtonGoogleLogin />
            </div>
          </form>
        </div>
        <div className="tips">
          <Link to="/" className="text-link">Forgot Password?</Link>
          <p>
            Don't have an account?
            <Link to="/auth/register" className="text-link"> Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;
