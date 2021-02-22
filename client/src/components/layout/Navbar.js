import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-tractor"> </i> Farmify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="#">
              <i className="fas fa-shopping-cart"></i> Shop
            </Link>{" "}
            <Link className="nav-link active" to="/login">
              <i className="fas fa-sign-in-alt"> </i> Login
            </Link>{" "}
            <Link className="nav-link active" to="/register">
              <i className="fas fa-user-plus"></i> Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
