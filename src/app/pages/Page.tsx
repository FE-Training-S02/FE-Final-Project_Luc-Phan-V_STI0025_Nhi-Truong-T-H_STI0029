import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@app/shared/components/layout';
import { Footer } from '@app/shared/components/layout';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { loadUser } from '@app/auth/auth.middleware';
import { LoadingProvider } from '@app/shared/providers/LoadingProvider';
import { useLoading } from '@app/shared/contexts/loading';

const Page = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.authReducer.userInfo);
  useEffect(() => {
    if (user) {
      return;
    }
    else {
      dispatch(loadUser());
    }
  }, []);
  return (
    <LoadingProvider>
    <>
      <Header />
      <div className="page-container">
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
   </LoadingProvider>
  );
};

export default Page;
