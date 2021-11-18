import React from 'react';
import { Link } from 'react-router-dom';
import ArticleItem from '../partials/ArticleItem';

const ArticleList = () => {
  return (
    <section className="section-articles-list">
      <h3 className="articles-list-title">Articles List</h3>
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
      <button className="btn-load-more">Load more</button>
    </section>
  );
};

export default ArticleList;
