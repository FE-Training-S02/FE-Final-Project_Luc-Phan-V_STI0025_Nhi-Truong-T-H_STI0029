import React from 'react';
import { Link } from 'react-router-dom';

const ArticleDetail = () => {
  return (
    <main className="article-detail-wrap">
      <header className="article-detail-header">
        <div className="article-detail-header-left">
          <ul className="article-detail-list-info">
            <li className="article-detail-item-author">
              <Link to="/">
                <i className="fas fa-pen-fancy"></i>
                <span>Alexey Trofimov </span>
              </Link></li>
            <li className="article-detail-item-comment">
              <i className="far fa-comment"></i>
              <span>1 </span>
            </li>
            <li className="article-detail-item-likes">
              <i className="far fa-heart"></i>
              <span>2 </span>
            </li>
          </ul>
        </div>
        <div className="article-detail-header-right">
          <Link to="/">
            <i className="far fa-bookmark"></i>
          </Link>
        </div>
        <h1 className="article-title">How Minimalism Helps Me Stay Calm</h1>
        <div className="article-detail-header-separator"></div>
      </header>
      <section className="article-detail-content">
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
    </main>
  );
};

export default ArticleDetail;
