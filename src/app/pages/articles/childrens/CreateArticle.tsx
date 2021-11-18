import React from 'react';
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
  const onsubmit = (data: any) => {
    // console.log(data);
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
              onReady={editor => {
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </div>
          <Button className="btn btn-primary btn-block" type='submit'>Create article</Button>
        </form>
      </div>

    </>
  );
}

export default CreateArticle;
