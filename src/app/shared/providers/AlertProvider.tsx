import React, { useCallback, useState } from 'react';
import { AlertContext, useAlert } from '../contexts/alert.context';

export const Alert = () => {
  const { alert, onClosed } = useAlert();
  const { type, messError, messSuccess } = alert;

  return (
    <>
      {type === 'AlertError' &&
        <div className="alert alert-error">
          {messError}
          <button className="btn close" onClick={() => onClosed()}>
            <span>&times;</span>
          </button>
        </div>
      }
      {type === 'AlertSuccess' &&
        <div className="alert alert-success">
          {messSuccess}
          <button className="btn close" onClick={() => onClosed()}>
            <span>&times;</span>
          </button>
        </div>
      }
    </>
  )
}

export const AlertProvider = props => {
  const [alert, setAlert] = useState();
  const onClosed = useCallback(() => {
    setAlert(null);
  }, [setAlert]);
  return (
    <AlertContext.Provider value={{ alert, onClosed, setAlert }} >
      {props.children}
      {alert && <Alert />}
    </AlertContext.Provider>
  );
}

