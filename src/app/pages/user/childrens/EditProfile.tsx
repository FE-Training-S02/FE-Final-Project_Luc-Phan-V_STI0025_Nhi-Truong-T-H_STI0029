import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import JwtHelper from '@app/core/helpers/jwtHelper';
import Button from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';
import { birthDayValidator, firstNameValidator, lastNameValidator, phoneValidator, userNameValidator } from '@app/shared/validators/form.validator';
import Select from '@app/shared/components/partials/Select';
import { useLoading } from '@app/shared/contexts/loading.context';
import { useDispatch } from 'react-redux';
import { getUserInfo, updateUserInfo, uploadImage } from '../user.middleware';
import { useAlert } from '@app/shared/contexts/alert.context';
import { saveUserInfo } from '@app/auth/auth.actions';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const jwtHelper = new JwtHelper();
  const id = jwtHelper.getUserInfo() ? jwtHelper.getUserInfo().userId : null;
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm({ mode: 'onTouched' });
  const { setLoading } = useLoading();
  const { setAlert } = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [urlImage, setUrlImage] = useState();
  const genderOptions = [
    { value: 'female', name: 'Female' },
    { value: 'male', name: 'Male' },
    { value: 'other', name: 'Other' }
  ];
  useEffect(() => {
    setLoading(true);
    dispatch(getUserInfo(id,
      (res) => {
        setLoading(false);
        setValue('firstName', res.firstName, { shouldValidate: true });
        setValue('lastName', res.lastName, { shouldValidate: true });
        setValue('displayName', res.displayName, { shouldValidate: true });
        setUrlImage(res.picture);
        setValue('dob', res.dob, { shouldValidate: true });
        setValue('phone', res.phone, { shouldValidate: true });
        setValue('gender', res.gender, { shouldValidate: true });
      },
      (error) => {
        setLoading(false);
      }
    ));
  }, []);
  const handleChange = (e) => {
    const file = e.target.files[0];
    setLoading(true);
    dispatch(uploadImage(file,
      (res) => {
        setUrlImage(res.url);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      }))
  };
  const onSubmit = (data) => {
    const user = {
      ...data,
      picture: urlImage
    }
    setLoading(true);
    dispatch(updateUserInfo(
      user,
      (res) => {
        setLoading(false);
        setAlert({
          type: 'success',
          mess: 'Your profile has been updated successfully'
        });
        dispatch(saveUserInfo(res));
        navigate('/users/profile');
      },
      (error) => {
        setLoading(false);
        setAlert({
          type: 'danger',
          mess: 'An error occurred while editing profile!'
        });
      })
    )
  };
  return (
    <div>
      <h2 className="page-title">Edit profile</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row justify-content-center mb-10">
            <div className="col col-3 d-flex justify-content-center">
              <div className="avatar-image">
                {urlImage ? <img src={urlImage} alt="avatar" className="avatar-img" /> : <img src="./assets/images/user.png" alt="avatar" className="avatar-img" />}
                <input type="file" name="image" id="input-image" className="input-image" accept="image/*" onChange={handleChange} />
                <label htmlFor="input-image" className="select-image"> <i className="fas fa-camera"></i></label>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-3">
              <label className="col-form-label">First Name</label>
              <Input
                type="text"
                register={register('firstName', firstNameValidator())}
                errors={errors.firstName} />
            </div>
            <div className="col col-3">
              <label className="col-form-label">Last Name</label>
              <Input
                type="text"
                register={register('lastName', lastNameValidator())}
                errors={errors.lastName} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-3">
              <label className="col-form-label">User name</label>
              <Input
                type="text"
                register={register('displayName', userNameValidator())}
                errors={errors.displayName} />
            </div>
            <div className="col col-3">
              <label className="col-form-label">Phone</label>
              <Input
                type="text"
                register={register('phone', phoneValidator())}
                errors={errors.phone} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-3">
              <label className="col-form-label">Gender</label>
              <Select
                listOptions={genderOptions}
                defaultValue={genderOptions[0]}
                register={register('gender')} />
            </div>
            <div className="col col-3">
              <label className="col-form-label">Birthday</label>
              <Input
                type="date"
                register={register('dob', birthDayValidator())}
                errors={errors.dob} />
            </div>
          </div>
          <div className="row form-btn-group">
            <div className="col col-3">
              <div className="btn-group">
                <Button
                  className="btn btn-primary btn-block"
                  type='submit'
                  disabled={!isValid}
                >Update Profile</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile;
