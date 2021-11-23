import React from 'react';

export function CommentItem(props) {
  return (
    <li className="comment-item mt-2">
      <img src="./assets/icons/user.png" className="avatar-comment" alt="avatar"/>
      <div className="comment-body">
        <h4 className="comment-author">John</h4>
        <p className="comment-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
      </div>
    </li>
  );
}
