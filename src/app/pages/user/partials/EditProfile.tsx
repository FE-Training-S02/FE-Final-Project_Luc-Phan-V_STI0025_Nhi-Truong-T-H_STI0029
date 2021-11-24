import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@app/shared/components/partials/Button';
import Input from '@app/shared/components/partials/Input';
import Select from '@app/shared/components/partials/Select';
import { birthDayValidator, firstNameValidator, lastNameValidator, phoneValidator, userNameValidator } from '@app/shared/validators/form.validator';

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = () => {

  }
  return (
    <div>
      <h2 className="page-title">Edit profile</h2>
      <div className="form-wrapper">

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-6">

            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="col-form-label">First Name</label>
              <Input
                type="text"
                placeholder="First Name"
                register={register('firstName', firstNameValidator())}
                errors={errors.firstName} />
            </div>
            <div className="col-6">
              <label className="col-form-label">Last Name</label>
              <Input
                type="text"
                placeholder="Last Name"
                register={register('lastName', lastNameValidator())}
                errors={errors.lastName} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label className="col-form-label">User name</label>
              <Input
                type="text"
                placeholder="User name"
                register={register('displayName', userNameValidator())}
                errors={errors.displayName} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              {/* <Select
                label="Gender"
                listOptions={genderOptions}
                defaultValue={genderOptions[0]}
                register={register('gender')} /> */}
              <div className="col-6">
                <label className="col-form-label">Birthday</label>
                <Input
                  type="date"
                  placeholder="Birthday"
                  register={register('dob', birthDayValidator())}
                  errors={errors.dob} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label className="col-form-label">Phone</label>
              <Input
                type="text"
                placeholder="Phone"
                register={register('phone', phoneValidator())}
                errors={errors.phone} />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="btn-group">
                <Button
                  className="btn btn-primary btn-block"
                  type='submit' >Update Profile</Button>
                {/* {errMessage && <span className="btn btn-block alert alert-error mt-4">{errMessage}</span>} */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
