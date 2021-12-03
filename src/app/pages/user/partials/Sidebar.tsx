import React from 'react';
import RecommendArticles from '@app/shared/components/partials/RecommendArticles';
import FollowList from './FollowList';

const Sidebar = (props) => {
  const { id } = props;
  return (
    <>
      <aside className="col col-4 sidebar">
        <ul>
          <li className="widget">
            <h4 className="widget-title">Followers</h4>
            <FollowList id={id} type="followers" />
          </li>
          <li className="widget">
            <h4 className="widget-title">Followings</h4>
            <FollowList id={id} type="followings" />
          </li>
          <li className="widget">
            <h4 className="widget-title">Quote of the day</h4>
            <div className="widget-content">
              <div className="content-quote">
                <blockquote>&quot;There are no #strangers here, only #friends that have not yet met.&quot;</blockquote >
              </div>
              <h5 className="byline">Theme Doe</h5>
            </div>
          </li>
          <li className="widget">
            <RecommendArticles />
          </li>
        </ul>
      </aside>
    </>
  );
}
export default Sidebar
