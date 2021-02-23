import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  //inline style class
  const myclass = {
    margin: "15px 0px",
    padding: "5px 0px",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("password didn't match", "danger");
      console.log("password didn't match");
    } else {
      // console.log(formData);
      register({ name, email, password });
    }
  };

  const { name, email, password, password2 } = formData;

  // redirect to shop
  if (isAuthenticated) {
    return <Redirect to="/shop" />;
  }

  return (
    <Fragment>
      <div
        className="d-flex p-2 bd-highlight justify-content-center align-items-center"
        style={{ marginTop: "50px" }}
      >
        <form className="form" onSubmit={onSubmit}>
          <p className="fs-1 text-light bg-dark">
            Create your account , SignUp
          </p>
          <div className="form-group" style={myclass}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={onChange}
            />
          </div>
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
          <div className="form-group" style={myclass}>
            <input
              type="password"
              name="password2"
              placeholder="Confirm password"
              className="form-control"
              value={password2}
              onChange={onChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input type="submit" className="btn btn-success" value="Register" />
            <br />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
