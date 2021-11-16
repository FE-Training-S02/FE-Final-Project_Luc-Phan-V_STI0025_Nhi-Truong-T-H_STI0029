import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@app/shared/components/layout';
import { Footer } from '@app/shared/components/layout';

const Page = () => {
  return (
    <>
    <Header />
    <div className="pages-container">
      Page component works!
      <Outlet />
    </div>
    <Footer />
    </>
  );
};

export default Page;
