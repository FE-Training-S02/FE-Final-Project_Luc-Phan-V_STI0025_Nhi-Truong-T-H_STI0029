import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useAlert } from '@app/shared/contexts/alert.context';
import { useLoading } from '@app/shared/contexts/loading.context';
import { changePassword } from '../user.middleware';
import { passwordValidator } from '@app/shared/validators/form.validator';
import Button from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors }
  } = useForm({ mode: 'onTouched', reValidateMode: 'onSubmit' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setAlert } = useAlert();
  const { setLoading } = useLoading();
  const onSubmit = (data) => {
    setLoading(true);
    dispatch(changePassword(data,
      (res) => {
        setLoading(false);
        setAlert({
          type: 'success',
          mess: res
        });
        reset({
          data: ''
        });
        navigate('/users/profile');
      },
      (error) => {
        setLoading(false);
        setAlert({
          type: 'danger',
          mess: error.response.data.errors
        });
      }))
  }
  return (
    <>
      <h2 className="page-title">Change your password</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row justify-content-center">
            <div className="col-6">
              <label className="col-form-label">Old Password</label>
              <Input
                type="password"
                register={register('oldPassword', passwordValidator())}
                errors={errors.oldPassword} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <label className="col-form-label">New Password</label>
              <Input
                type="password"
                register={register('newPassword', passwordValidator())}
                errors={errors.newPassword} />
            </div>
          </div>
          <div className="row form-btn-group">
            <div className="col">
              <Button
                className="btn btn-primary btn-block"
                type="submit"
                disabled={!isValid}>Change Password
              </Button>
            </div>
          </div>
        </form>
      </div >
    </>
  );
}

export default ChangePassword;
