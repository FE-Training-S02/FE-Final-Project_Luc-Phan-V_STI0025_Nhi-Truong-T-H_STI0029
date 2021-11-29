import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useDialog } from '@app/shared/contexts/dialog.context';
import { useLoading } from '@app/shared/contexts/loading.context';
import { likeArticle } from '../article.middleware';

export function Like(props) {
  const { id, like, liked, user } = props;
  const [likes, setLikes] = useState<any>(like);
  const [isLiked, setIsLiked] = useState<any>(liked);
  const { setLoading } = useLoading();
  const { setDialog } = useDialog();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLikeArticle = () => {
    if (user) {
      setLoading(true);
      dispatch(likeArticle(
        id,
        (res) => {
          setIsLiked(res.liked);
          res.liked ? setLikes(pre => +pre + 1) : setLikes(pre => +pre - 1);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
        })
      );
    } else { handleLogin() }
  };
  const handleLogin = () => {
    setDialog({
      type: 'blue',
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
  return (
    <button className="btn-interact likes" onClick={handleLikeArticle}>
      <i className={`fa fa-heart ${isLiked ? 'liked' : ''}`}></i>
      <span>{likes}</span>
    </button>
  );
}
