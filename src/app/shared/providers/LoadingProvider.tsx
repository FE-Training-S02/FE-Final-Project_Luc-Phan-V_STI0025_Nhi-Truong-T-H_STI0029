import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LoadingContext } from '../contexts/loading';

function Loading() {
  return <div>Loading...</div>;
}

export function LoadingProvider(props) {
  const [loading, setLoading] = useState(false);
  
  return (
    <LoadingContext.Provider
      value={{
        loading: loading,
        show: (isLoading) => setLoading(isLoading),
      }}>
      <>
        {loading && <Loading />}
        {props.children}
      </>
    </LoadingContext.Provider>
  );
}

LoadingProvider.propTypes = {
  children: PropTypes.node
};
