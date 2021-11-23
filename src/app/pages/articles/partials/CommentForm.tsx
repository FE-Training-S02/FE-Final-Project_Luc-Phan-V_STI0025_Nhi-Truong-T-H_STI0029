import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import Button from '@app/shared/components/partials/Button';
import { useDispatch } from 'react-redux';
import { CommentsList } from './CommentList';
import { postComment, getArticleDetail } from '../article.middleware';

const CommentForm = (props) => {
  const { id, submitComment } = props;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();
  const disPatch = useDispatch()
  const onSubmit = (data: any) => {
    disPatch(postComment(id, data,
      (res) => {
        reset();
        submitComment();
      },
      (error) => {
        console.log(error);
      }
      )
    )
  };
  return (
    <>
      <div className="page-content">
        <div className="form-wrapper">
          <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="input-group">
                <textarea
                  className="form-control"
                  placeholder="Comment content..."
                  {...register('content')}
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
