import Button from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';
import { useAlert } from '@app/shared/contexts/alert.context';
import { passwordValidator } from '@app/shared/validators/form.validator';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { changePassword } from '../user.middleware';

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors }
  } = useForm({ mode: 'onChange', reValidateMode: 'onSubmit' });
  const dispatch = useDispatch();
  const { setAlert } = useAlert();
  const onSubmit = (data) => {
    dispatch(changePassword(data,
      (res) => {
        setAlert({
          type: 'success',
          mess: res
        });
        reset({
          data: ''
        });
      },
      (error) => {
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
            <label className="col-2 col-form-label">Old Password</label>
            <div className="col-4">
              <Input
                type="password"
                register={register('oldPassword', passwordValidator())}
                errors={errors.oldPassword} />

            </div>
          </div>
          <div className="row justify-content-center">
            <label className="col-2 col-form-label">New Password</label>
            <div className="col-4">
              <Input
                type="password"
                register={register('newPassword', passwordValidator())}
                errors={errors.newPassword} />
            </div>
          </div>
          <div className="row form-btn-group">
            <div className="col">
              <Button
                className={`btn btn-primary btn-block ${!isValid ? 'btn-disable' : ''}`}
                type='submit'>Change Password
              </Button>
            </div>
          </div>
        </form>
      </div >
    </>
  );
}

export default ChangePassword;