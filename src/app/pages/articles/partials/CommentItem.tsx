import React from 'react';

export function CommentItem(props) {
  const { user, comment } = props.comment;
  return (
    <li className="comment-item mt-2">
      <img src={user.picture || "./assets/icons/user.png"} className="avatar-comment" alt="avatar"/>
      <div className="comment-body">
        <h4 className="comment-author">{user.displayName||user.lastName}</h4>
        <p className="comment-content">{comment}</p>
      </div>
    </li>
  );
}
