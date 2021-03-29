import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";
import classes from "../../global-css/global.module.css";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
    // console.log(formData);
  };

  // redirect to shop
  if (isAuthenticated) {
    return <Redirect to="/shop" />;
  }

  return (
    <Fragment>
      <div className="d-flex bd-highlight justify-content-center align-items-center m-1">
        <form className="form" onSubmit={onSubmit}>
          <p className={"text-light bg-dark text-center " + classes.myHeading}>
            Login to your account
          </p>
          <div className="form-group mt-5">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="form-control"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group my-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="d-flex justify-content-center mt-5">
            <input type="submit" className="btn btn-success" value="Login" />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
