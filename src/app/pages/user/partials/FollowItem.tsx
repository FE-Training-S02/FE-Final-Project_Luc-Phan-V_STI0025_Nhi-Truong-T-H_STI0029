import React, {} from 'react';

const FollowItem = (props) => {
  const { user } = props;
  return (
    <li className="col col-4 follow-item mb-4">
      <a href={`/users/${user.id}`}><img src={user?.picture || "./assets/images/user.png"} alt="user-avatar" className="user-img"/></a>
      <a href={`/users/${user.id}`} className="user-name txt-truncate">{user.displayName || `${user.firstName} ${user.lastName}`}</a>
    </li>
  );
};

export default FollowItem;
