import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@app/shared/components/partials/Input';
import Button from '@app/shared/components/partials/Button';

const CommentForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  return (
    <>
      <div className="page-content">
        <div className="form-wrapper">
          <form className="mt-4">
            <div className="form-group">
              <div className="input-group">
                <textarea
                className="form-control"
                placeholder="Comment content..."
                />
              </div>
            </div>
            <Button className="btn btn-primary btn-block" type='submit'>Comment</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
