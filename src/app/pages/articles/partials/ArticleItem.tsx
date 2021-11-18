import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@app/shared/models/post';

const ArticleItem = (props) => {
  const { cover, user, tags, title, description } = props.post;
  return (
    <div className="article-item">
      <img src={cover} alt="article image" className="article-img" />
      <div className="dropdown">
        <button className="btn-dropdown">...</button>
        <ul className="sub-dropdown">
          <button className="sub-dropdown-item">Delete</button>
          <button className="sub-dropdown-item">Update</button>
        </ul>
      </div>
      <div className="article-body">
        <div className="article-author">
          <img src="./assets/icons/user.png" alt="avatar" className="author-img" />
          <h4>
            <span>By <Link className="author-name txt-uppercase" to="/">{user.firstName} {user.lastName}</Link></span>
            {tags[0] ?
              <>
                <span>&nbsp;-&nbsp;</span>
                <span className="article-tag">{tags[0]}</span>
              </> : <></>}
          </h4>
        </div>
        <h3 className="article-title">{title}</h3>
        <p className="article-content">{description}</p>
      </div>
      <div className="article-interact">
        <span className="article-interact-item"><img src="./assets/icons/like.png" alt="" className="interact-icon" /> 1</span>
        <span className="article-interact-item"><img src="./assets/icons/comment.png" alt="" className="interact-icon" /> 1</span>
        <Link to="" className="article-interact-item btn-read-more">Read more...</Link>
      </div>
    </div>
  );
};

export default ArticleItem;
