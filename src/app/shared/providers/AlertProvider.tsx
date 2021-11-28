import React, { useCallback, useEffect, useState } from 'react';
import { AlertContext, useAlert } from '../contexts/alert.context';

export const Alert = () => {
  const { alert, onClosed } = useAlert();
  const { type, mess } = alert;

  return (
    <div className={`alert alert-${type}`}>
      {mess}
      <button className="btn btn-close" onClick={onClosed}>
        <span>&times;</span>
      </button>
    </div>
  );
};

export const AlertProvider = props => {
  const [alert, setAlert] = useState();
  const onClosed = useCallback(() => {
    setAlert(null);
  }, [setAlert]);
  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    };
  }, [alert]);
  return (
    <AlertContext.Provider value={{ alert, onClosed, setAlert }}>
      {props.children}
      {alert && <Alert />}
    </AlertContext.Provider>
  );
};
