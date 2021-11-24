import React from 'react';
import { Link } from 'react-router-dom';
import ChangePassword from '../partials/ChangePassword';
import EditProfile from '../partials/EditProfile';

const UserProfile = () => {
  return (
    <div className="row">
      <aside className="col-4 sidebar">
        <nav className="nav-profile">
          <ul className="nav-profile-list">
            <li className="nav-profile-item">
              <Link to="">Articles</Link>
            </li>
            <li className="nav-profile-item">
              <Link to="">Edit profile</Link>
            </li>
            <li className="nav-profile-item">
              <Link to="">Change Password</Link>
            </li>
            <li className="nav-profile-item">
              <Link to="">Follow</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="col-8">
        {/* <ChangePassword /> */}
        <EditProfile />
      </section>
    </div>
  );
}

export default UserProfile;