import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { likeArticle } from '../article.middleware';
import { getArticleDetail } from '../article.middleware';

export function Like(props) {
  const { id, like, liked } = props;
  const [likes, setLikes] = useState<any>();
  const [isLiked, setIsLiked] = useState<any>(liked);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getArticleDetail(
        id,
        (res) => {
          setIsLiked(res.isLiked);
          setLikes(res.likes);
        },
        (error) => {
          console.log(error);
        })
      );
    }
  }, [id, isLiked])
  const handleLikeArticle = async() => {
    await dispatch(likeArticle(
      id,
      (res) => {
        setIsLiked(res.liked);
      },
      (error) => {
        console.log(error);
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
