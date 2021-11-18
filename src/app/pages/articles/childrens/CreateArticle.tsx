import Input from '@app/shared/components/partials/Input';
import React from 'react';

const CreateArticle = () => {
  return (
    <div>
      <form>
        <div className="form-group row">
          <label className="col-2 col-form-label">Tile</label>
          <div className="col-10">
            <input type="text" className="form-control-plaintext" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-2 col-form-label">Description</label>
          <div className="col-10">
            <input type="password" className="form-control" placeholder="Description" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-2 col-form-label">Tags</label>
          <div className="col-10">
            <input type="text" className="form-control" placeholder="Tags" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-2 col-form-label">Status</label>
          <select className="col-10">
            <option selected>Public</option>
            <option>Private</option>
          </select>
        </div>
        <div className="form-group row">
          <label className="col-2 col-form-label" >Select image</label>
          <input type="file" className="col-10" />
        </div>
        <div className="form-group row">
          <label className="col-2 col-form-label" >Content</label>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
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
        <button type="submit" className="btn btn-primary">Create article</button>
      </form>
    </div>
  );
}

export default CreateArticle;