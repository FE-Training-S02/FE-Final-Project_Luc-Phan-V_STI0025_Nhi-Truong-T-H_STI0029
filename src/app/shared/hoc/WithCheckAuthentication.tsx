import React from 'react';
import { useNavigate } from 'react-router';
import { useDialog } from '@app/shared/contexts/dialog.context';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';

const WithCheckAuthentication = (Wrapped: any) => { 
  return (props) => {
    const { setDialog } = useDialog();
    const navigate = useNavigate();
    const currentUser = useSelector((state: RootStateOrAny) => state.authReducer.userInfo);
    const handleLogin = () => {
      setDialog({
        type: 'primary',
        data: {
          title: 'Confirm',
          content: 'Please login to continue',
          accept: 'Login',
          cancel: 'Cancel'
        },
        confirmDialog: confirmLogin
      });
    };
    const confirmLogin = () => {
      navigate('/auth/login');
    };
    const handle = (handleAction) => {
      if (currentUser) {
        handleAction();
      } 
      else { 
        handleLogin(); 
      }
    }   
    return <Wrapped {...props} handle={handle}/>;
  }
}
export default WithCheckAuthentication;
