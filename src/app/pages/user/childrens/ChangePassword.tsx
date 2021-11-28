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
    formState: { errors }
  } = useForm();
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
      <h2 className="page-title">Change Password</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row justify-content-center">
            <div className="col-6">
              <label className="col-form-label">Old Password</label>
              <Input
                type="password"
                placeholder="Old Password"
                register={register('oldPassword', passwordValidator())}
                errors={errors.oldPassword} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <label className="col-form-label">New Password</label>
              <Input
                type="password"
                placeholder="New Password"
                register={register('newPassword', passwordValidator())}
                errors={errors.newPassword} />
            </div>
          </div>
          <div className="w-75 ml-1 d-flex justify-content-end">
            <div className="w-25">
              <div className="btn-group">
                <Button
                  className="btn btn-primary btn-block"
                  type='submit'>Change Password</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ChangePassword;
