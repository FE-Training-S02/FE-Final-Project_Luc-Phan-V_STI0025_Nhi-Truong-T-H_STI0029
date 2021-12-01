import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDialog } from '@app/shared/contexts/dialog.context';

export function Follow(props) {
  const { user, followUser } = props;
  const currentUser = useSelector((state: RootStateOrAny) => state.authReducer.userInfo);
  const { setDialog, onClosed } = useDialog();
  const navigate = useNavigate();
  const handleLogin = () => {
    setDialog({
      type: 'primary',
      data: {
        title: 'Confirm',
        content: 'Please login to continue',
        accept: 'Login',
        cancel: 'Cancel'
      },
      confirmDialog: () => confirmLogin()
    });
  }
  const confirmLogin = () => {
    navigate('/auth/login');
  };
  const follow = () => {
    if (currentUser) {
      followUser();
    }
    else {
      handleLogin();
    }
  }
  return (
    <button className={`btn ${user?.isFollowed ? 'btn-primary' : 'btn-outline-primary'} btn-follow`} onClick={follow}>
      {user?.isFollowed ? 'Following' : '+ Follow'}
    </button>
  );
}
