import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArticleList from '../partials/ArticleList';

const Profile = () => {
  const user = useSelector((state: RootStateOrAny) => state.authReducer.userInfo);
  return (
    <div className="profile">
      <div className="row user-info mb-2">
        <div className="col col-12">
          <img src={user?.picture || "./assets/icons/user.png"} alt="Admin" className="avatar-img" />
          <div className="mt-3">
            <h4 className="user-name">{user?.firstName} {user?.lastName}</h4>
            <div className="mb-2">
              <span className="mr-2">{user?.followers} followers</span>
              <span className="ml-2">{user?.followings} followings</span>
            </div>
            <Link to="/" className="btn btn-outline-secondary mr-2">Edit Profile</Link>
            <Link to="/user/change-password" className="btn btn-primary">Change Password</Link>
          </div>
        </div>
      </div>
      <div className="profile-body">
        <ArticleList />
      </div>
    </div>
  );
}
export default Profile;
