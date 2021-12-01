import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams, useLocation } from 'react-router-dom';
import JwtHelper from '@app/core/helpers/jwtHelper';
import { useLoading } from '@app/shared/contexts/loading.context';
import ArticleList from '../partials/ArticleList';
import { getUserInfo } from '../user.middleware';
import { postFollow } from '@app/pages/articles/article.middleware';
import { Follow } from '@app/pages/articles/partials/Follow';

const Profile = () => {
  const jwtHelper = new JwtHelper();
  const curentUserId = jwtHelper.getUserInfo() ? jwtHelper.getUserInfo().userId : null;
  const [user, setUser] = useState<any>();
  const dispatch = useDispatch();
  const { setLoading } = useLoading();
  const pathName = useLocation().pathname;
  const [id, setId] = useState<any>();
  const paramId = useParams().id;
  useEffect(() => {
    const authorId = (pathName === '/users/profile') ? curentUserId : paramId;
    setId(authorId);
    setLoading(true);
    dispatch(getUserInfo(
      authorId,
      (res) => {
        setUser(res);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      }
    ));
  }, [id]);
  const followUser = () => {
    const data = {
      'followingId': id
    };
    setLoading(true);
    dispatch(postFollow(
      data,
      (res) => {
        res.followed ? user.followers = user.followers + 1 : user.followers = user.followers - 1;
        setUser({ ...user, isFollowed: res.followed });
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      })
    );
  };
  return (
    <div className="profile">
      <div className="row user-info mb-2">
        <div className="col col-12">
          <img src={user?.picture || "./assets/icons/user.png"} alt="avatar" className="avatar-img" />
          <div className="mt-3">
            <h4 className="user-name">{user?.firstName} {user?.lastName}</h4>
            {user?.displayName && <h6>(<span>{user?.displayName})</span></h6>}
            <div className="mb-2">
              <span className="mr-2">{user?.followers} followers</span>
              <span className="ml-2">{user?.followings} followings</span>
            </div>
            {(curentUserId === id) ?
              <>
                <Link to="/profile/edit-profile" className="btn btn-outline-secondary mr-2">Edit Profile</Link>
                <Link to="/profile/change-password" className="btn btn-primary">Change Password</Link>
              </>
              :
              (user && <Follow user={user} followUser={followUser} />)
            }
          </div>
        </div>
      </div>
      {curentUserId ?
        <div className="profile-body">
          {id && <ArticleList id={id} />}
        </div>
        :
        <div className="row">
          <div className="notification col-12 pd-10">
            <h3 className="mb-5">Connecting with {user?.displayName} on ST-Blog</h3>
            <Link to="/auth/login" className="btn btn-primary mr-2">Sign In</Link>
            <span>Or</span>
            <Link to="/auth/register" className="btn btn-outline-primary ml-2">Sign up</Link>
          </div>
        </div>}
    </div>
  );
}
export default Profile;
