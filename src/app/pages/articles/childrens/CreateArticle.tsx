import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Select from '@app/shared/components/partials/Select';
import Input from '@app/shared/components/partials/Input';
import Button from '@app/shared/components/partials/Button';
import { requireValidator } from '@app/shared/validators/form.validator';

const CreateArticle = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const statusOptions = [
    { value: 'public', name: 'Public' },
    { value: 'private', name: 'Private' }
  ]
  const [content, setContent] = useState(null);
  const onsubmit = (data: any) => {

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
    console.log(register);
  }
  return (
    <>
      <h2 className="page-title">Create article</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="row">
            <label className="col-2 col-form-label">Tile</label>
            <div className="col-10">
              <Input type="text" register={register('title', requireValidator())} errors={errors.title} />
            </div>
          </div>
          <div className="row">
            <label className="col-2 col-form-label">Description</label>
            <div className="col-10">
              <Input type="text" register={register('description', requireValidator())} errors={errors.description} />
            </div>
          </div>
          <div className="row">
            <label className="col-2 col-form-label">Tags</label>
            <div className="col-10">
              <Input type="text" register={register('tags', requireValidator())} errors={errors.tags} />
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
            <Input type="file" register={register('cover', requireValidator())} errors={errors.cover} />
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
