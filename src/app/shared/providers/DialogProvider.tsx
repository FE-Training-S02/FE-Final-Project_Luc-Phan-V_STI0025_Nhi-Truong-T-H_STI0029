import React, { useCallback, useState } from 'react';
import { DialogContext, useDialog } from '../contexts/dialog.context';

export const Dialog = () => {
  const { dialog, onClosed } = useDialog();
  const { type, data, confirmDialog } = dialog;
  const { title, content, accept, cancel } = data;
  return (
    <div className="modal-fade" onClick={onClosed}>
      <div className="modal">
        <div className="modal-box modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button className="close" onClick={onClosed}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{content}</p>
            </div>
            <div className="modal-footer">
              <button className={`btn btn-${type || 'primary'}`} onClick={confirmDialog} >{accept}</button>
              <button className="btn btn-secondary" onClick={onClosed}>{cancel}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DialogProvider = props => {
  const [dialog, setDialog] = useState(null);
  const onClosed = useCallback(() => {
    setDialog(null);
  }, [setDialog]);
  return (
    <DialogContext.Provider value={{ dialog, onClosed, setDialog }} {...props}>
      {props.children}
      {dialog && <Dialog />}
    </DialogContext.Provider>
  );
};

