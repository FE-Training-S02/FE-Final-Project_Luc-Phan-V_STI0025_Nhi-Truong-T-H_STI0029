import React from 'react';
import { Link } from 'react-router-dom';

const ArticleItem = () => {
  return (
    <div className="article-item">
      <img src="./assets/images/image.png" alt="article image" className="article-img"/>
      <div className="article-body">
        <div className="article-author">
          <img src="./assets/icons/user.png" alt="avatar" className="author-img"/>
          <h4>
            <span>By <a className="author-name" href="#">Admin</a></span>
            <span>&nbsp;-&nbsp;</span>
            <span className="article-tag">Food</span>
          </h4>
        </div>
        <h3 className="article-title">Plating made easy: feast with your eyes</h3>
        <p className="article-content">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
      </div>
      <div className="article-interact">
        <span className="article-interact-item"><img src="./assets/icons/like.png" alt="" className="interact-icon"/> 1</span>
        <span className="article-interact-item"><img src="./assets/icons/comment.png" alt="" className="interact-icon"/> 1</span>
        <a href="#" className="article-interact-item btn-read-more">Read more...</a>
      </div>
    </div>
  );
};

export default ArticleItem;
