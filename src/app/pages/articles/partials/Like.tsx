import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoading } from '@app/shared/contexts/loading.context';
import { likeArticle } from '../article.middleware';

export function Like(props) {
  const { id, like, liked } = props;
  const [likes, setLikes] = useState<any>(like);
  const [isLiked, setIsLiked] = useState<any>(liked);
  const { setLoading } = useLoading();
  const dispatch = useDispatch();
  const handleLikeArticle = () => {
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
  };
  return (
    <button className="btn-interact likes" onClick={handleLikeArticle}>
      <i className={`fa fa-heart ${isLiked ? 'liked' : ''}`}></i>
      <span>{likes}</span>
    </button>
  );
}
