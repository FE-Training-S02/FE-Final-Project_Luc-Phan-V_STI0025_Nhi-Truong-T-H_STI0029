import React from 'react';
import { Link } from 'react-router-dom';
import ArticleItem from '../partials/ArticleItem';

const ArticleList = () => {
  return (
    <section className="container">
      <ul className="row article-list">
        <li className="col col-4">
          <ArticleItem />
        </li>
        <li className="col col-4">
          <ArticleItem />
        </li>
        <li className="col col-4">
          <ArticleItem />
        </li>
      </ul>
    </section>
  );
};

export default ArticleList;
