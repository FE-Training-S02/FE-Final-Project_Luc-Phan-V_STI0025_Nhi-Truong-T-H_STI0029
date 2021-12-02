import React from 'react';
import moment from 'moment';
import { convertDateFromNow } from '@app/shared/pipes/covert-date-from-now';

export function CommentItem(props) {
  const { user, comment, createdAt } = props.comment;
  return (
    <li className="comment-item mt-2">
      <img src={user.picture || "./assets/icons/user.png"} className="avatar-comment" alt="avatar" />
      <div className="comment-body">
        <h4 className="comment-author">{user.displayName || user.lastName}</h4>
        <p className="txt-date-time">{convertDateFromNow(createdAt)}</p>
        <p className="comment-content">{comment}</p>
      </div>
    </li>
  );
}
