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
import JwtHelper from '@app/core/helpers/jwtHelper';
import TagsInput from '@app/shared/components/partials/TagsInput';

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
    trigger,
    setValue,
    formState: { isValid, errors }
  } = useForm({ mode: 'onTouched', reValidateMode: 'onChange' });
  const statusOptions = [
    { value: 'public', name: 'Public' },
    { value: 'private', name: 'Private' }
  ];

  const [tagData, setTagData] = useState<any>([]);
  const handleAddTag = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      setTagData([...tagData, event.target.value]);
      event.target.value = '';
    }
  }
  const handleRemoveTagData = (indexRemove) => {
    setTagData([...tagData].filter((tag, index) => index !== indexRemove));
  }

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

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
    }
  };
  const onsubmit = async (data: any) => {
    const article = {
      ...data,
      tags: tagData,
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
    window.scroll({ top: 0, left: 0 });
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
            setValue('title', res.title, { shouldValidate: true });
            setValue('description', res.description, { shouldValidate: true });
            setTagData(res.tags);
            setValue('status', res.status, { shouldValidate: true });
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
        <form onKeyPress={e => handleKeyPress(e)} onSubmit={handleSubmit(onsubmit)}>
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
          {/* <div className="row justify-content-center">
            <div className="col-7">
              <label className="col-form-label">Tags</label>
              <TagsInput
                type="text"
                register={register('tags')}
                placeholder="Press enter to add a tag"
                errors={errors.tags}
              />
            </div>
          </div> */}
          <div className="row justify-content-center">
            <div className="col-7">
              <label className="col-form-label">Tags</label>
              <div className="tag-input">
                <ul className="list-tags">
                  {tagData.map((tag, index) => (
                    <li key={index} className="item-tag">
                      <span className="title-tag">{tag}</span>
                      <span className="tag-close-icon" onClick={() => handleRemoveTagData(index)}>x</span>
                    </li>
                  ))}
                </ul>
                <input
                  type="text"
                  placeholder="Press enter to add a tag"
                  {...register('tags')}
                  onKeyUp={handleAddTag}
                />
              </div>
              {errors?.tags && <span className="msg-error">{errors.tags.message}</span>}
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
                }}
              />
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
