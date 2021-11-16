import React from 'react';
import { Link } from 'react-router-dom';

const ArticleDetail = () => {
  return (
    <div className="container">
      <main className="article-detail-wrap">
        <header className="article-detail-header">
          <ul className="article-detail-list-info">
            <li className="article-detail-item-author">
              <Link to="/">
                <i className="fas fa-pen-fancy"></i>
                <span>Alexey Trofimov </span>
              </Link></li>
            <li className="article-detail-item-author">
              <i className="far fa-comment"></i>
              <span>1 </span>
            </li>
          </ul>
          <h1 className="article-title">How Minimalism Helps Me Stay Calm</h1>
          <div className="article-detail-header-separator"></div>
        </header>

      </main>
    </div>
  );
};

export default ArticleDetail;
