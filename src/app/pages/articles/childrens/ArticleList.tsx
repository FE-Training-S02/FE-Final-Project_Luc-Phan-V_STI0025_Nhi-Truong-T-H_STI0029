import React from 'react';
import { Link } from 'react-router-dom';
import ArticleItem from '../partials/ArticleItem';

const ArticleList = () => {
  return (
    <ul className="article-list">
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
    </ul>
  );
};

export default ArticleList;
