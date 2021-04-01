import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="d-flex flex-column justify-content-center align-items-center bg-dark">
        <div className="text-light my-4">
          <Link to="/">
            <i className="fab fa-facebook-square fs-1 m-2"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-linkedin fs-1 m-2"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-github-square fs-1 m-2"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-twitter-square fs-1 m-2"></i>
          </Link>
        </div>
        <div className="text-light text-center">
          <h4>11812041 Mohit</h4>
          <h4>CS A (3)</h4>
          <h6 className="mt-4">All rights reserved.</h6>
          <h6>Farmify ( College Project )</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
