import React from 'react';
import { CommentItem } from './CommentItem';
export function CommentsList(props) {
  const { commentsList } = props;
  return (
    <ul className="comments-list">
      {commentsList.map((item: any, index: any) =>
        <CommentItem comment={item} key={index} />
      )}
    </ul>
  );
}
