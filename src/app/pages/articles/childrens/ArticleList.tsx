import React, { useState, useEffect } from 'react';
import ArticleItem from '../partials/ArticleItem';
import { loadArticles } from '../article.middleware';
import { Post } from '@app/shared/models/postType';

const ArticleList =  () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  useEffect(()=> {loadArticles(setPosts, posts, page)},[])
  return (
    <section className="section-articles-list">
      <h3 className="articles-list-title">Articles List</h3>
      <ul className="row article-list">
        {posts.map((item: Post, index: any) =>
            <li className="col col-4" key={item.id}>
              <ArticleItem post={item} />
            </li>
          )}
      </ul>
      <button className="btn-load-more">Load more</button>
    </section>
  );
};

export default ArticleList;
