import React from 'react';
import { Link } from 'react-router-dom';
import ArticleItem from './ArticleItem';

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
