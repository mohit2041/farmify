import React from "react";

const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ margin: "200px 0px" }}
    >
      <div
        className="spinner-grow text-info"
        style={{ width: "70px ", height: "70px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
