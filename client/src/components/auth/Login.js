import React, { Fragment, useState } from "react";

const Login = () => {
  //inline style class
  const myclass = {
    margin: "15px 0px",
    padding: "5px 0px",
  };

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

    console.log(formData);
  };

  return (
    <Fragment>
      <div
        className="d-flex p-2 bd-highlight justify-content-center align-items-center"
        style={{ marginTop: "50px" }}
      >
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

export default Login;
