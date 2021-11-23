import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoading } from '@app/shared/contexts/loading.context';
import { CommentItem } from './CommentItem';
import { getCommentsList } from '../article.middleware';
export function CommentsList(props) {
  const { id } = props;
  const [commentsList, setCommentsList] = useState([]); 
  const { setLoading } = useLoading();
  const disPatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    getComments(
      id,
      (res) => {
        setCommentsList(res);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      }
    );
  }, []);
  const getComments = (id, resolve, reject) => {
    disPatch(getCommentsList(id, resolve, reject));
  };
  return (
    <ul className="comments-list">
      {commentsList.map((item: any, index: any) =>
        <CommentItem comment={item} key={index} />
      )}
    </ul>
  );
}
