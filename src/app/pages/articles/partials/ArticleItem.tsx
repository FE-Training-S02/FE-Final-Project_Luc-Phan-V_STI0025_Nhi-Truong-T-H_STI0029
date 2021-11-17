import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@app/shared/models/postType';

const ArticleItem = (props) => {
  const { post } =  props;
  return (
    <div className="article-item">
      <img src="./assets/images/image.png" alt="article image" className="article-img"/>
      <div className="dropdown">
        <button className="btn-dropdown">...</button>
        <div className="sub-dropdown">
          <Link to="/">Delete</Link>
          <Link to="/">Update</Link>
        </div>
      </div>
      <div className="article-body">
        <div className="article-author">
          <img src="./assets/icons/user.png" alt="avatar" className="author-img"/>
          <h4>
            <span>By <Link className="author-name txt-uppercase" to="/">{post.user.firstName} {post.user.lastName}</Link></span>
            {post.tags[0] ? 
            <>
            <span>&nbsp;-&nbsp;</span>
            <span className="article-tag">{post.tags[0]}</span>
            </> : <></>}
          </h4>
        </div>
        <h3 className="article-title">{post.title}</h3>
        <p className="article-content">{post.description}</p>
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
