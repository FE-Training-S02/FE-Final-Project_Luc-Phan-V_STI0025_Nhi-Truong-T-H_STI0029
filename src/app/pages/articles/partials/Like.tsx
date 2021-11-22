import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { likeArticle } from '../article.middleware';
import { getArticleDetail } from '../article.middleware';
import { useParams } from 'react-router-dom';

export function Like(props) {
  const { id, like, liked } = props;
  const [likes, setLikes] = useState<any>(like);
  const [isLiked, setIsLiked] = useState<any>();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getArticleDetail(
        id,
        (res) => {
          console.log('isliked', res.isLiked)
          setIsLiked(res.isLiked);
          setLikes(res.likes);
        },
        (error) => {
        }));
    }
  }, [id, isLiked])
  const handleLikeArticle = async() => {
    await dispatch(likeArticle(
      id,
      (res) => {
        console.log(res)
        setIsLiked(res.liked);
      },
      (error) => {
        console.log(error);
      })
    );
  }
  return (
    <button className="btn-interact likes" onClick={handleLikeArticle}>
      <i className={`fa fa-heart ${isLiked ? 'liked' : ''}`}></i>
      <span>{likes}</span>
    </button>
  );
}
