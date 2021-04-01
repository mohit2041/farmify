import React from "react";
import classes from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className="container text-danger">
      <div className="text-center">
        <div className="m-3">
          <i className={"fas fa-exclamation-triangle  " + classes.myIcon}></i>
        </div>
        <h1>This page is not found!</h1>
        <p>Try to go to valid page...</p>
      </div>
    </div>
  );
};

export default NotFound;
