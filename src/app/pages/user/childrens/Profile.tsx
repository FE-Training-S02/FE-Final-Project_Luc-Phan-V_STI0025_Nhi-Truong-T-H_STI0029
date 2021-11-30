import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams, useLocation } from 'react-router-dom';
import JwtHelper from '@app/core/helpers/jwtHelper';
import { useLoading } from '@app/shared/contexts/loading.context';
import ArticleList from '../partials/ArticleList';
import { getUserInfo } from '../user.middleware';

const Profile = () => {
  const jwtHelper = new JwtHelper();
  const curentUserId = jwtHelper.getUserInfo() ? jwtHelper.getUserInfo().userId : null;
  const [user, setUser] = useState<any>({});
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
            {(curentUserId === id) &&
              <>
                <Link to="/" className="btn btn-outline-secondary mr-2">Edit Profile</Link>
                <Link to="/users/profile/change-password" className="btn btn-primary">Change Password</Link>
              </>
            }
          </div>
        </div>
      </div>
      <div className="profile-body">
        {id && <ArticleList id={id} />}
      </div>
    </div>
  );
}
export default Profile;
