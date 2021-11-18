import React from 'react';
import { Link } from 'react-router-dom';

const ArticleDetail = () => {
  return (
    <main className="main-content">
      <div className="article-header">
        <h2 className="article-title">How Minimalism Helps Me Stay Calm</h2>
        <div className="article-author">
          <span className="text-writen-by">WRITEN BY</span>
          <Link to="/" className="article-author-name">
            <i className="fas fa-pen-fancy"></i>
            <h3>Alexey Trofimov </h3>
          </Link>
          <button className="btn btn-outline">+ Follow</button>
        </div>
        <ul className="article-actions">
          <li className="article-action-item">
            <button className="btn btn-icon">
              <i className="far fa-comment"></i>
              <span>2 </span>
            </button>
          </li>
          <li className="article-action-item">
            <button className="btn btn-icon">
              <i className="far fa-heart"></i>
              <span>2 </span>
            </button>
          </li>
          <li className="article-action-item">
            <button className="btn btn-icon">
              <i className="far fa-bookmark"></i>
            </button>
          </li>
        </ul>
      </div>
      <div className="article-body">
        <img src="./assets/images/article-detail.jpg" className="article-cover-image" alt="image-article" />
        <div className="article-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ArticleDetail;
