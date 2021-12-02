import React from 'react';
import { Link } from 'react-router-dom';
import RecommendArticles from '../partials/RecommendArticles';

const Sidebar = () => {

  return (
    <>
      <aside className="col col-4 sidebar">
        <ul>
          <li className="widget">
            <h4 className="widget-title">Tags</h4>
            <ul className="categories-list">
              <li className="categorie-item">
                <Link to="/">
                  <div className="article-tags">
                    <span className="badge badge-tag-sidebar">Travel</span>
                  </div>
                </Link>
              </li>
              <li className="categorie-item">
                <Link to="/">
                  <span className="badge badge-tag-sidebar">Technology</span>
                </Link>
              </li>
              <li className="categorie-item">
                <Link to="/">
                  <span className="badge badge-tag-sidebar">Business</span>
                </Link>
              </li>
              <li className="categorie-item">
                <Link to="/">
                  <span className="badge badge-tag-sidebar">Art</span>
                </Link>
              </li>
              <li className="categorie-item">
                <Link to="/">
                  <span className="badge badge-tag-sidebar">Food</span>
                </Link>
              </li>
            </ul>
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
