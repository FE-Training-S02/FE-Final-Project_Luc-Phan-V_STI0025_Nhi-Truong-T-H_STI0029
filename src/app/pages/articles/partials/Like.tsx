import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { likeArticle } from '../article.middleware';

export function Like(props) {
  const { id, like, liked } = props;
  const [likes, setLikes] = useState<any>(like);
  const [isLiked, setIsLiked] = useState<any>(liked);
  const dispatch = useDispatch();
  const handleLikeArticle = async() => {
    await dispatch(likeArticle(
      id,
      (res) => {
        setIsLiked(res.liked);
        res.liked ? setLikes(+likes + 1) : setLikes(+likes - 1);
      },
      (error) => {
        console.log(error);
      })
    );
  };
  return (
    <button className="btn-interact likes" onClick={handleLikeArticle}>
      {console.log(isLiked)}
      <i className={`fa fa-heart ${isLiked ? 'liked' : ''}`}></i>
      <span>{likes}</span>
    </button>
  );
}
