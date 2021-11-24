import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@app/shared/components/layout';
import { Footer } from '@app/shared/components/layout';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '@app/auth/auth.middleware';

const Page = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.authReducer.userInfo);
  useEffect(() => {
    if (user) {
      return;
    }
    else {
      dispatch(getUserInfo());
    }
  }, []);
  return (
    <>
      <Header />
      <div className="page-container">
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
