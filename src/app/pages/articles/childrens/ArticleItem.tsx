import React from 'react';
import { Link } from 'react-router-dom';

const ArticleItem = () => {
  return (
    <div>
      This is article-item page
      <p>
        <Link to="1">See detail</Link>
      </p>
    </div>
  );
};

export default ArticleItem;
