import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@app/shared/components/partials/Button';
import { useDispatch } from 'react-redux';
import { postComment } from '../article.middleware';
import { useDialog } from '@app/shared/contexts/dialog.context';
import { useNavigate } from 'react-router';

const CommentForm = (props) => {
  const { id, submitComment, user } = props;
  const navigate = useNavigate();
  const { setDialog } = useDialog();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors }
  } = useForm({ mode: 'onChange', reValidateMode: 'onChange' });
  const dispatch = useDispatch()
  const onSubmit = (data: any) => {
    if (user) {
      dispatch(postComment(id, data,
        (res) => {
          reset();
          submitComment();
        },
        (error) => {
          console.log(error);
        }
      )
      )
    } else { handleLogin() }
  };
  const handleLogin = () => {
    setDialog({
      type: 'primary',
      data: {
        title: 'Confirm',
        content: 'Please login to continue',
        accept: 'Login',
        cancel: 'Cancel'
      },
      confirmDialog: () => confirmLogin()
    });
  }
  const confirmLogin = () => {
    navigate('/auth/login');
  };
  return (
    <>
      <div className="page-content">
        <div className="form-wrapper">
          <form className="mt-4 mb-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="input-group">
                <textarea
                  className="form-control"
                  placeholder="Comment content..."
                  {...register('content', { required: true })}
                />
              </div>
            </div>
            <Button
              className="btn btn-primary btn-block"
              disabled={!isValid}
              type="submit"
            >
              Comment
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
