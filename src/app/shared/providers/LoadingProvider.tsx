import React, { useState } from 'react';
import { LoadingContext } from '../contexts/loading.context';

function Loading() {
  return (
    <div className="page-loader">
      <div className="loader simple-circle"></div>
    </div>
  )
}
export function LoadingProvider(props: any) {
  const [loading, setLoading] = useState(false);
  
  return (
    <LoadingContext.Provider
      value={{
        loading: loading,
        setLoading,
      }}>
      <>
        {loading && <Loading />}
        {props.children}
      </>
    </LoadingContext.Provider>
  );
}
