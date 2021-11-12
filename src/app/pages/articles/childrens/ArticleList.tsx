import React from 'react';
import { Link } from 'react-router-dom';
import ArticleItem from './ArticleItem';

const ArticleList = () => {
  return (
    <div>
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
    </div>
  );
};

export default ArticleList;
