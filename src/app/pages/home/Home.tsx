import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/articles');
  }, []);
  return (
    <></>
  );
};

export default Home;
