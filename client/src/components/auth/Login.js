import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

const Login = ({ login, isAuthenticated }) => {
  //inline style class
  const myclass = {
    margin: "15px 0px",
    padding: "5px 0px",
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let results = false;

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
      <div className="d-flex bd-highlight justify-content-center align-items-center">
        <form className="form" onSubmit={onSubmit}>
          <p className="fs-1 text-light bg-dark">Login to your account</p>
          <div className="form-group" style={myclass}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="form-control"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group" style={myclass}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="d-flex justify-content-center">
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
