import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';;
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Select from '@app/shared/components/partials/Select';
import Input from '@app/shared/components/partials/Input';
import Button from '@app/shared/components/partials/Button';
import { descriptionValidator, requireValidator, titleValidator } from '@app/shared/validators/form.validator';
import { ApiService } from "@app/core/services/api.service";
import { uploadImage } from '../article.middleware';
import { getArticleDetail } from '../article.middleware';

const CreateArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>({});
  const [urlImage, setUrlImage] = useState<any>('');
  const apiService = new ApiService();
  const [content, setContent] = useState(null);
  const disPatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm();

  const statusOptions = [
    { value: 'public', name: 'Public' },
    { value: 'private', name: 'Private' }
  ]

  async function handleUploadImage(file, resolve, reject) {
    await disPatch(uploadImage(file, resolve, reject));
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    const resolve = (res) => {
      const { signedRequest, url } = res;
      setUrlImage(url)
      axios.put(signedRequest, file);
    }
    const reject = (error) => {
      console.log(error);
    }
    handleUploadImage(file, resolve, reject);
  }
  const onsubmit = async (data: any) => {
    const article = {
      ...data,
      tags: [data.tags],
      cover: urlImage,
      content: content
    };
    { id ? apiService.put([`/posts/${id}`], article) : apiService.post(['/posts'], article) };
    navigate('/articles');
  }
  useEffect(() => {
    if (id) {
      disPatch(getArticleDetail(
        id,
        (res) => {
          setValue('title', res.title);
          setValue('description', res.description);
          setValue('tags', res.tags[0]);
          setValue('status', res.status);
          setContent(res.content);
          setArticle(res);
          setUrlImage(res.cover)
        },
        (error) => {
          console.log(error);
        }));
    }
  }, [id]);
  return (
    <>
      <h2 className="page-title">{id ? 'Edit Article' : 'New Article'}</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="row">
            <label className="col-3 col-form-label">Title</label>
            <div className="col-6">
              <Input
                type="text"
                register={register('title', titleValidator())}
                errors={errors.title} />
            </div>
          </div>
          <div className="row">
            <label className="col-3 col-form-label">Description</label>
            <div className="col-6">
              <Input
                type="text"
                register={register('description', descriptionValidator())}
                errors={errors.description} />
            </div>
          </div>
          <div className="row">
            <label className="col-3 col-form-label">Tags</label>
            <div className="col-6">
              <Input
                type="text" register={register('tags', requireValidator())} errors={errors.tags} />
            </div>
          </div>
          <div className="row">
            <label className="col-3 col-form-label">Status</label>
            <div className="col-6">
              <Select listOptions={statusOptions} defaultValue={statusOptions[0]} register={register('status', requireValidator())} />
            </div>
          </div>
          <div className="row">
            <label className="col-3 col-form-label" >Upload image</label>
            <div className="col-6">
              {id ?
                <Input
                  type="file"
                  register={register('cover')}
                  errors={errors.cover}
                  onChange={() => handleChange}
                /> :
                <Input
                  type="file"
                  register={register('cover', requireValidator())}
                  errors={errors.cover}
                  onChange={() => handleChange}
                />
              }
              {urlImage ? <img src={urlImage} alt="cover" className="col-4" /> : ''}
            </div>
          </div>
          <div className="row row-ck">
            <label className="col-3 col-form-label">Content</label>
            <div className="col-6">
              <CKEditor
                editor={ClassicEditor}
                data={content}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setContent(data);
                }
                }
              />
            </div>
          </div>
          <div className="row form-btn-group">
            <div className="col-3">
              <Button className="btn btn-primary btn-block" type='submit'>{id ? 'Save' : 'Submit'}</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default CreateArticle;
