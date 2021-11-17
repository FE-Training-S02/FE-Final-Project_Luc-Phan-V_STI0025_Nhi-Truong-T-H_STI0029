import React from 'react';
import { Link } from 'react-router-dom';

const ArticleDetail = () => {
  return (
    <main className="article-detail-wrap">
      <header className="article-detail-header">
        <div className="container">
          <div className="container-header">
            <h2 className="article-title">How Minimalism Helps Me Stay Calm</h2>
            <div className="article-detail-header-separator"></div>
            <div className="article-detail-author">
              <span className="text-writen-by">WRITEN BY</span>
              <Link to="/" className="author">
                <i className="fas fa-pen-fancy"></i>
                <span>Alexey Trofimov </span>
              </Link>
              <button className="follow-author">+ Follow</button>
            </div>
            <ul className="article-detail-header-list">
              <li className="article-detail-item">
                <button className="btn-comment">
                  <i className="far fa-comment"></i>
                  <span>2 </span>
                </button>
              </li>
              <li className="article-detail-item">
                <button className="btn-heart">
                  <i className="far fa-heart"></i>
                  <span>2 </span>
                </button>
              </li>
              <li className="article-detail-item">
                <button className="btn-bookmark">
                  <i className="far fa-bookmark"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section className="article-detail-content">
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ArticleDetail;
