import React, { useEffect, useState } from 'react';
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