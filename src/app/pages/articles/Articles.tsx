import React from 'react';
import { Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <main className="articles-page">
      <Outlet />
    </main>
  );
};

export default Articles;
