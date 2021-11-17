import React from "react";

const Loading = ({ loading, message }) => {
  return loading ? (
    <div className="overlay-content">
      <div className="wrapper">
        <h1>Loading...</h1>
      </div>
    </div>
  ) : null;
};

export default Loading;