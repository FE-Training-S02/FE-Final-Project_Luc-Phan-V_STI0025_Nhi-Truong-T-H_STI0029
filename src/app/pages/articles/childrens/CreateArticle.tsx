import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Select from '@app/shared/components/partials/Select';
import Input from '@app/shared/components/partials/Input';
import Button from '@app/shared/components/partials/Button';
import { descriptionValidator, requireValidator, titleValidator } from '@app/shared/validators/form.validator';
import { uploadImage, getArticleDetail, createArticle, updateArticle } from '../article.middleware';
import { useLoading } from '@app/shared/contexts/loading.context';
import { useAlert } from '@app/shared/contexts/alert.context';
import viewToPlainText from '@ckeditor/ckeditor5-clipboard/src/utils/viewtoplaintext';
import { types } from 'util';
import JwtHelper from '@app/core/helpers/jwtHelper';

const CreateArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>({});
  const [urlImage, setUrlImage] = useState<any>('');
  const [content, setContent] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { setAlert } = useAlert();
  const jwt = new JwtHelper();
  const {
    register,
    handleSubmit,
    setError,
    trigger,
    setValue,
    formState: { isValid, errors }
  } = useForm({ mode: 'onChange', reValidateMode: 'onChange' });
  const statusOptions = [
    { value: 'public', name: 'Public' },
    { value: 'private', name: 'Private' }
  ];

  async function handleUploadImage(file, resolve, reject) {
    await dispatch(uploadImage(file, resolve, reject));
  };
  const resolve = (res) => {
    setUrlImage(res.url);
    setLoading(false);
  };
  const reject = (error) => {
    setLoading(false);
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    setLoading(true);
    trigger('cover');
    handleUploadImage(file, resolve, reject);
  };
  const onsubmit = async (data: any) => {
    const article = {
      ...data,
      tags: [data.tags],
      cover: urlImage,
      content: content
    };
    setLoading(true);
    {
      id ?
        dispatch(updateArticle(
          id,
          article,
          (res) => {
            setLoading(false);
            navigate(`/articles/${id}`);
            setAlert({
              type: 'success',
              mess: 'The article has been updated successfully'
            });
          },
          (error) => {
            setLoading(false);
            setAlert({
              type: 'danger',
              mess: 'An error occurred while editing the article!'
            });
          })
        )
        :
        dispatch(createArticle(
          article,
          (res) => {
            setLoading(false);
            navigate(`/articles/${res.id}`);
            setAlert({
              type: 'success',
              mess: 'The article has been created successfully'
            });
          },
          (error) => {
            setLoading(false);
            setAlert({
              type: 'danger',
              mess: 'An error occurred while creating the article!'
            });
          })
        )
    }
  };
  useEffect(() => {
    if (id) {
      setLoading(true);
      dispatch(getArticleDetail(
        id,
        (res) => {
          const isCurrentUser = jwt.isCurrentUser(res.userId);
          if (!isCurrentUser) {
            navigate('/articles/page-not-found');
            setLoading(false);
          }
          else {
            setValue('description', res.description);
            setValue('title', res.title);
            setValue('description', res.description);
            setValue('tags', res.tags[0]);
            setValue('status', res.status);
            setContent(res.content);
            setArticle(res);
            setUrlImage(res.cover);
            setLoading(false);
          }
        },
        (error) => {
          setLoading(false);
        }));
    }
  }, [id]);
  return (
    <>
      <h2 className="page-title">{id ? 'Edit Article' : 'New Article'}</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="row justify-content-center">
            <div className="col-7">
              <label className="col-form-label">Title</label>
              <Input
                type="text"
                register={register('title', titleValidator())}
                errors={errors.title} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-7">
              <label className="col-form-label">Description</label>
              <Input
                type="text"
                register={register('description', descriptionValidator())}
                errors={errors.description} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-7">
              <label className="col-form-label">Tags</label>
              <Input
                type="text" register={register('tags')} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-7">
              <label className="col-form-label">Status</label>
              <Select listOptions={statusOptions} defaultValue={statusOptions[0]} register={register('status', requireValidator())} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-7">
              <label className="col-form-label">Upload image</label>
              {id ?
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                      {...register('cover')}
                      onChange={handleChange}
                    />
                    {errors.cover?.type === 'required' && <span className="msg-error">Image is required</span>}
                  </div>
                </div> :
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                      {...register('cover', { required: { value: true, message: 'This field is required' } })}
                      onChange={handleChange}
                    />
                    {errors.cover?.type === 'required' && <span className="msg-error">{errors.cover.message}</span>}
                  </div>
                </div>
              }
              {urlImage ? <img src={urlImage} alt="cover" className="col-4" /> : ''}
            </div>
          </div>
          <div className="row row-ck justify-content-center">
            <div className="col-7">
              <label className="col-form-label">Content</label>
              <CKEditor
                editor={ClassicEditor}
                data={content}

                name="content"
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setContent(data);
                  // const valueLength = viewToPlainText(editor.editing.view.document.getRoot()).length;
                  // setError("content", {
                  //   types: {
                  //     required: true,
                  //     message: "This is required"
                  //   }
                  // });
                }}
              />
              {/* {errors.content && errors.content.types.required && (
                  <span className="msg-error-ck">{errors.content.types.message}</span>
                )} */}
            </div>
          </div>
          <div className="row form-btn-group">
            <div className="col-3">
              <Button
                className="btn btn-primary btn-block"
                type="submit"
                disabled={!isValid}
              >
                {id ? 'Save' : 'Submit'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default CreateArticle;
