import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import classes from "./navbar.module.css";

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  // for getting profile by id
  let profileLink = user !== null ? `/profile/${user.name}/${user._id}` : "";

  const authLinks = (
    <div className="d-flex justify-content-between">
      <div>
        <Link to="/market">
          <i className="fas fa-shopping-cart"></i> Market
        </Link>
      </div>
      <div>
        <Link aria-current="page" to="/shop">
          <i className="fas fa-shopping-cart"></i> Shop
        </Link>
      </div>
      <div>
        <Link aria-current="page" to={profileLink}>
          <i className="fas fa-user"></i> Profile
        </Link>
      </div>
      <div>
        <Link onClick={logout} to="/login">
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      </div>
    </div>
  );

  const guestLinks = (
    <div className="d-flex justify-content-between">
      <div>
        <Link to="/market">
          <i className="fas fa-shopping-cart"></i> Market
        </Link>
      </div>
      <div>
        <Link to="/login">
          <i className="fas fa-sign-in-alt"></i> Login
        </Link>
      </div>
      <div>
        <Link to="/register">
          <i className="fas fa-user-plus"></i> Register
        </Link>
      </div>
    </div>
  );

  return (
    <Fragment>
      <nav
        className="navbar fixed-top navbar-dark bg-dark"
        style={{ opacity: 0.8 }}
      >
        <div className="d-flex justify-content-between container-fluid">
          <div>
            <Link to="/">
              <i className="fas fa-tractor"> </i> Farmify
            </Link>
          </div>

          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
      </nav>
    </Fragment>
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
