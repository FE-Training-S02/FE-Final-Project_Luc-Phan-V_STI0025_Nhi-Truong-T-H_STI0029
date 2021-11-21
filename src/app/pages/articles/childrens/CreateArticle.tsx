import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Select from '@app/shared/components/partials/Select';
import Input from '@app/shared/components/partials/Input';
import Button from '@app/shared/components/partials/Button';
import { descriptionValidator, requireValidator, titleValidator } from '@app/shared/validators/form.validator';
import { ApiService } from "@app/core/services/api.service";
import { createArticle } from '../article.middleware';

const CreateArticle = () => {
  const apiService = new ApiService();
  const [content, setContent] = useState(null);
  const disPatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const statusOptions = [
    { value: 'public', name: 'Public' },
    { value: 'private', name: 'Private' }
  ]

  async function handleCreateArticle(file, resolve, reject) {
    await disPatch(createArticle(file, resolve, reject));
  };
  const handleChange = (e) => {
    const file = (e.target.files[0]);
    console.log(file);
  }
  const onsubmit = async (data: any) => {
    const file = data.cover[0];
    const cover = {
      type_upload: "cover-post",
      file_name: file.name,
      file_type: file.type
    };
    const register = {
      ...data,
      cover: cover,
      content: content
    }
    const resolve = (res) => {
      const { signedRequest, url } = res;
      axios.put(signedRequest, file);
      const data = { ...register, tags: [], cover: url };
      apiService.post(['/posts'], data);
    }
    const reject = (error) => {
      console.log(error);
    }
    handleCreateArticle(file, resolve, reject);
    reset();
  }
  return (
    <>
      <h2 className="page-title">Create article</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="row">
            <label className="col-2 col-form-label">Tile</label>
            <div className="col-10">
              <Input
                type="text"
                register={register('title', titleValidator())}
                errors={errors.title} />
            </div>
          </div>
          <div className="row">
            <label className="col-2 col-form-label">Description</label>
            <div className="col-10">
              <Input
                type="text"
                register={register('description', descriptionValidator())}
                errors={errors.description} />
            </div>
          </div>
          <div className="row">
            <label className="col-2 col-form-label">Tags</label>
            <div className="col-10">
              <Input
                type="text" register={register('tags', requireValidator())} errors={errors.tags} />
            </div>
          </div>
          <div className="row">
            <label className="col-2 col-form-label">Status</label>
            <div className="col-10">
              <Select listOptions={statusOptions} defaultValue={statusOptions[0]} register={register('status', requireValidator())} />
            </div>
          </div>
          <div className="row">
            <label className="col-2 col-form-label" >Upload image</label>
            <Input type="file" accept="image/*" register={register('cover', requireValidator())} errors={errors.cover} onChange={() => handleChange} />
          </div>
          <div className="row row-ck">
            <label className="col-2 col-form-label form-label-content">Content</label>
            <CKEditor
              editor={ClassicEditor}
              data=""
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }
              }
            />
          </div>
          <Button className="btn btn-primary btn-block" type='submit'>Create article</Button>
        </form>
      </div>
    </>
  );
}
export default CreateArticle;
