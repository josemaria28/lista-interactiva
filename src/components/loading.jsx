import React from "react";

const loading = ({ error }) => {
  if (error)
    return (
      <div className="alert alert-danger" role="alert">
        Error!!
      </div>
    );
  return (
    <div className="text-center mt-3">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default loading;
