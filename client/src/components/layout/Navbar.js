import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  // for getting profile by id
  let profileLink = user !== null ? `/profile/${user.name}/${user._id}` : "";

  const authLinks = (
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" to="/market">
          <i className="fas fa-shopping-cart"></i> Market
        </Link>{" "}
        <Link className="nav-link active" aria-current="page" to="/shop">
          <i className="fas fa-shopping-cart"></i> Shop
        </Link>{" "}
        <Link className="nav-link active" aria-current="page" to={profileLink}>
          <i className="fas fa-user"></i> Profile
        </Link>{" "}
        <Link onClick={logout} className="nav-link active" to="/login">
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      </div>
    </div>
  );

  const guestLinks = (
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" to="/market">
          <i className="fas fa-shopping-cart"></i> Market
        </Link>{" "}
        <Link className="nav-link active" to="/login">
          <i className="fas fa-sign-in-alt"></i> Login
        </Link>{" "}
        <Link className="nav-link active" to="/register">
          <i className="fas fa-user-plus"></i> Register
        </Link>
      </div>
    </div>
  );

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg  navbar-dark bg-dark"
      style={{ opacity: 0.8 }}
    >
      <div className="d-flex justify-content-between container-fluid">
        <div>
          <Link className="navbar-brand" to="/">
            <i className="fas fa-tractor"> </i> Farmify
          </Link>
        </div>
        <div>
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
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
