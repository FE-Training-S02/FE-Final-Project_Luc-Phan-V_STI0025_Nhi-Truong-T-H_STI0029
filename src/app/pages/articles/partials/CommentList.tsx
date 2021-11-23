import React from 'react';
import { CommentItem } from './CommentItem';
export function CommentsList() {
  return (
    <ul className="comments-list">
      <CommentItem/>
      <CommentItem/>
      <CommentItem/>
    </ul>
  );
}
