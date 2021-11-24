import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@app/shared/components/layout/Sidebar';

const Articles = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Articles;
