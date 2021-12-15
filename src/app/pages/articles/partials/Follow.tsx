import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

export function Follow(props) {
  const { user, followUser, handle } = props;
  const follow = () => {
    handle(followUser);
  }
  return (
    <button className={`btn btn-icon ${user?.isFollowed ? 'btn-primary' : 'btn-outline-primary'} btn-follow`} onClick={follow}>
      {user?.isFollowed ? <i className="fas fa-user-check"></i> : <i className="fas fa-user-plus"></i>}
    </button>
  );
}
