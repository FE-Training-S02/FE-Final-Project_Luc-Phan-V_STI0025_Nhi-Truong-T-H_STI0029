import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = (props) => {
  const { id, cover, title, description, createdAt } = props.article;
  return (
    <div className="wrap-popular-item">
      <img src={cover} className="col-4 article-image" alt="" />
      <div className="col-8 article-content">
        <Link to={`/articles/${id}`} >
          <h5 className="article-title">{title}</h5>
        </Link>
        <p className="article-description">{description}</p>
        <span>{new Date(createdAt).toLocaleString()}</span>
      </div>
    </div>
  );
}

export default SidebarItem;
