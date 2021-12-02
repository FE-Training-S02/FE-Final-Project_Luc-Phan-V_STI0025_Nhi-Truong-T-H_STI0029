import React from 'react';
import { convertDate } from '@app/shared/pipes/convert-date';

export function CommentItem(props) {
  const { user, comment, createdAt } = props.comment;
  return (
    <li className="comment-item mt-2">
      <img src={user.picture || "./assets/icons/user.png"} className="avatar-comment" alt="avatar"/>
      <div className="comment-body ml-2">
        <div className="comment-author">
          <h6 className="user-name">{user.displayName || `${user.firstName} ${user.lastName}`}</h6>
          <p className="txt-date-time">{convertDate(createdAt)}</p>
        </div>
        <p className="comment-content">{comment}</p>
      </div>
    </li>
  );
}
